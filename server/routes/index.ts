import express, { Request, Response, NextFunction, Express } from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { join } from 'path';
import { AppServerModule } from '../src/app/app.server.module';

export function setupRoutes(app: Express, browserDistFolder: string, serverDistFolder: string, baseUrl: string): void {
  
  app.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
    providers: [
      { provide: APP_BASE_HREF, useValue: baseUrl }
    ]
  }));

  app.set('view engine', 'html');
  app.set('views', browserDistFolder);

  app.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y',
    etag: true
  }));

  app.get('*', (req: Request, res: Response, next: NextFunction) => {
    const { protocol, originalUrl, baseUrl, headers } = req;
    
    const userAgent = headers['user-agent'] || '';
    const isBot = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandex/i.test(userAgent);
    
    if (isBot) {
      res.setHeader('Cache-Control', 'public, max-age=300');
    } else {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }

    res.setHeader('X-Powered-By', 'Angular SSR');
    res.setHeader('Vary', 'User-Agent');

    const indexHtml = existsSync(join(browserDistFolder, 'index.original.html'))
      ? 'index.original.html'
      : 'index.html';

    res.render(indexHtml, {
      req,
      providers: [
        { provide: APP_BASE_HREF, useValue: baseUrl },
        { provide: 'ORIGIN_URL', useValue: `${protocol}://${headers.host}` },
        { provide: 'USER_AGENT', useValue: userAgent }
      ]
    });
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('SSR Error:', err.message);
    console.error('Stack trace:', err.stack);
    
    res.status(500).send('Internal Server Error');
  });
}

export function createApiRoutes(app: Express): void {
  const apiRouter = express.Router();

  apiRouter.get('/health', (req: Request, res: Response) => {
    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development',
      ssr: true
    });
  });

  apiRouter.get('/metrics', (req: Request, res: Response) => {
    const memUsage = process.memoryUsage();
    const cpuUsage = process.cpuUsage();
    
    res.json({
      memory: {
        heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024) + ' MB',
        heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024) + ' MB',
        rss: Math.round(memUsage.rss / 1024 / 1024) + ' MB'
      },
      cpu: {
        user: cpuUsage.user,
        system: cpuUsage.system
      },
      uptime: process.uptime()
    });
  });

  apiRouter.post('/invalidate-cache', (req: Request, res: Response) => {
    res.json({ message: 'Cache invalidated' });
  });

  app.use('/api', apiRouter);
}

export function configureStaticAssets(app: Express, distFolder: string): void {
  app.use('/assets', express.static(join(distFolder, 'assets'), {
    maxAge: '1y',
    etag: true,
    fallthrough: true
  }));

  app.use('/media', express.static(join(distFolder, 'media'), {
    maxAge: '1y',
    etag: true
  }));

  app.use('/favicon.ico', express.static(join(distFolder, 'favicon.ico'), {
    maxAge: '1d'
  }));
}
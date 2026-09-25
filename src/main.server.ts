import { APP_INITIALIZER } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { bootstrap as ngBootstrap } from '@angular/platform-browser';
import { NgExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { AppComponent } from './app/app.component';
import { AppServerModule } from './app/app.server.module';
import { readFileSync } from 'fs';
import { join } from 'path';

const indexHtml = join(process.cwd(), 'dist/angular-ssr-optimization/browser/index.html');

export function app(): express.Express {
  const server = express();
  const engine = new NgExpressEngine({
    bootstrap: AppServerModule,
    providers: [
      {
        provide: 'serverOptions',
        useValue: {
          document: readFileSync(indexHtml, 'utf-8'),
        },
      },
    ],
  });

  server.engine('html', engine);
  server.set('view engine', 'html');
  server.set('views', join(process.cwd(), 'dist/angular-ssr-optimization/browser'));

  server.get('*.*', express.static(join(process.cwd(), 'dist/angular-ssr-optimization/browser'), {
    maxAge: '1y',
  }));

  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [
        {
          provide: 'REQUEST',
          useValue: req,
        },
        {
          provide: 'RESPONSE',
          useValue: res,
        },
      ],
    });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export * from './main.server';

run();
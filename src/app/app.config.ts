import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideBrowserPerformanceMark, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors, withXsrfConfiguration } from '@angular/common/http';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideFileRouter } from '@angular/file-router';

import { routes } from './app.routes';
import { httpInterceptor } from './core/interceptors/http.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideBrowserPerformanceMark('app-initialization'),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideFileRouter(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }),
      withViewTransitions()
    ),
    provideHttpClient(
      withFetch(),
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN'
      }),
      withInterceptors([httpInterceptor])
    ),
    provideClientHydration(
      withHttpTransferCacheOptions({
        includePostRequests: false,
        filter: (req) => req.url.includes('/api/')
      })
    ),
    provideAnimations()
  ]
};
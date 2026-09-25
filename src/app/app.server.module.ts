import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ServerTransferStateModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule,
    NoopAnimationsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: 'SERVER_REQUEST_ORIGIN',
      useFactory: (req: any) => req.get('origin') || req.headers.get('host'),
      deps: ['REQUEST']
    },
    {
      provide: 'SERVER_REQUEST_URL',
      useFactory: (req: any) => req.url,
      deps: ['REQUEST']
    }
  ]
})
export class AppServerModule {
  constructor() {
    console.log('AppServerModule initialized - Server-Side Rendering enabled');
  }
}
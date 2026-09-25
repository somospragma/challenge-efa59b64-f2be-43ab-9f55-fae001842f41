import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { provideClientHydration } from '@angular/platform-browser';
import { TransferState, makeStateKey } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    provideHttpClient(withFetch()),
    provideClientHydration()
  ]
})
export class CoreModule {
  constructor(private transferState: TransferState) {
    // Configuración inicial para compartir datos entre SSR y CSR
    const PRODUCTS_KEY = makeStateKey<any[]>('products');
    if (typeof window !== 'undefined') {
      // Solo en el cliente: limpiar el estado transferido para evitar fugas de memoria
      this.transferState.remove(PRODUCTS_KEY);
    }
  }
}
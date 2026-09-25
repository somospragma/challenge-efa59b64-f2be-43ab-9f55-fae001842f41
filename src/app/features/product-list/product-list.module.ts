import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductCardComponent } from '@app/shared/components/product-card/product-card.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent,
        data: {
          title: 'Catálogo de Productos',
          description: 'Explora nuestra selección de productos con precios competitivos',
          prerender: true
        }
      }
    ])
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductListModule {
  constructor() {
    console.log('[ProductListModule] Módulo de lista de productos inicializado para SSR');
  }
}
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Product } from '@features/product-list/product.model';

const PRODUCTS_KEY = makeStateKey<any[]>('products');

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api.example.com/products'; // URL de la API simulada

  constructor(
    private http: HttpClient,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  getProducts(): Observable<Product[]> {
    // Verificar si los datos ya están en el TransferState (SSR)
    if (this.transferState.hasKey(PRODUCTS_KEY)) {
      const products = this.transferState.get(PRODUCTS_KEY, []);
      this.transferState.remove(PRODUCTS_KEY);
      return of(products);
    }

    // Si estamos en el servidor, hacer la petición HTTP y guardar en TransferState
    if (isPlatformServer(this.platformId)) {
      return this.http.get<Product[]>(this.apiUrl).pipe(
        tap(products => {
          this.transferState.set(PRODUCTS_KEY, products);
        }),
        catchError(this.handleError<Product[]>('getProducts', []))
      );
    }

    // Si estamos en el cliente, hacer la petición HTTP directamente
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
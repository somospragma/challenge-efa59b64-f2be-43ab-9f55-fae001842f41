import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, TransferState, makeStateKey, TransferStateKey } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Observable, Subject, of, throwError } from 'rxjs';
import { catchError, takeUntil, finalize, map, tap, retry, shareReplay } from 'rxjs/operators';
import { ProductService } from '@app/core/services/product.service';
import { Product } from '@app/core/models/product.model';
import { ProductListPresenter } from './product-list.presenter';
import { ProductListViewModel } from './product-list.view-model';

const PRODUCTS_STATE_KEY = makeStateKey<Product[]>('PRODUCTS_DATA');

export const PRODUCTS_TRANSFER_STATE_KEY = new TransferStateKey<Product[]>('PRODUCTS_TRANSFER');

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {
  viewModel$: Observable<ProductListViewModel>;
  isLoading = false;
  errorMessage = '';
  products: Product[] = [];
  currentPage = 1;
  totalPages = 1;
  pageSize = 12;
  sortBy = 'name';
  sortOrder: 'asc' | 'desc' = 'asc';
  filterCategory = '';
  filterMinPrice: number | null = null;
  filterMaxPrice: number | null = null;
  searchTerm = '';

  private destroy$ = new Subject<void>();
  private readonly presenter: ProductListPresenter;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.presenter = new ProductListPresenter(this.productService);
    this.viewModel$ = this.presenter.viewModel$;
    
    if (isPlatformServer(this.platformId)) {
      console.log('[ProductListComponent] Ejecutando en servidor - SSR activo');
    } else {
      console.log('[ProductListComponent] Ejecutando en navegador - CSR activo');
    }
  }

  ngOnInit(): void {
    this.initializeFromRoute();
    this.loadProducts();
    this.setupTransferState();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeFromRoute(): void {
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        this.currentPage = Number(params['page']) || 1;
        this.pageSize = Number(params['pageSize']) || 12;
        this.sortBy = params['sortBy'] || 'name';
        this.sortOrder = (params['sortOrder'] as 'asc' | 'desc') || 'asc';
        this.filterCategory = params['category'] || '';
        this.searchTerm = params['search'] || '';
        
        if (params['minPrice']) {
          this.filterMinPrice = Number(params['minPrice']);
        }
        if (params['maxPrice']) {
          this.filterMaxPrice = Number(params['maxPrice']);
        }
      });
  }

  private loadProducts(): void {
    this.isLoading = true;
    this.errorMessage = '';

    const cachedProducts = this.transferState.get(PRODUCTS_TRANSFER_STATE_KEY, null as any);
    
    if (cachedProducts) {
      console.log('[ProductListComponent] Obteniendo productos desde TransferState (SSR)');
      this.products = cachedProducts;
      this.transferState.remove(PRODUCTS_TRANSFER_STATE_KEY);
      this.isLoading = false;
      this.calculateTotalPages();
      this.updateViewModel();
      return;
    }

    this.productService.getProducts()
      .pipe(
        takeUntil(this.destroy$),
        tap(products => {
          console.log(`[ProductListComponent] Cargar ${products.length} productos`);
          this.products = products;
          
          if (isPlatformServer(this.platformId)) {
            this.transferState.set(PRODUCTS_TRANSFER_STATE_KEY, products);
          }
        }),
        catchError(error => {
          console.error('[ProductListComponent] Error al cargar productos:', error);
          this.errorMessage = this.presenter.handleError(error);
          return of([]);
        }),
        finalize(() => {
          this.isLoading = false;
          this.calculateTotalPages();
          this.updateViewModel();
        }),
        retry({
          count: 2,
          delay: 1000
        }),
        shareReplay(1)
      )
      .subscribe();
  }

  private setupTransferState(): void {
    if (isPlatformBrowser(this.platformId)) {
      const existingState = this.transferState.get(PRODUCTS_TRANSFER_STATE_KEY, null as any);
      if (existingState) {
        console.log('[ProductListComponent] Estado transferido desde servidor detectado');
        this.transferState.remove(PRODUCTS_TRANSFER_STATE_KEY);
      }
    }
  }

  private calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.products.length / this.pageSize);
  }

  private updateViewModel(): void {
    this.presenter.updateViewModel({
      products: this.getFilteredAndSortedProducts(),
      isLoading: this.isLoading,
      error: this.errorMessage,
      currentPage: this.currentPage,
      totalPages: this.totalPages,
      pageSize: this.pageSize,
      sortBy: this.sortBy,
      sortOrder: this.sortOrder,
      filterCategory: this.filterCategory,
      filterMinPrice: this.filterMinPrice,
      filterMaxPrice: this.filterMaxPrice,
      searchTerm: this.searchTerm
    });
  }

  getFilteredAndSortedProducts(): Product[] {
    let filtered = [...this.products];

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(term) || 
        p.description?.toLowerCase().includes(term)
      );
    }

    if (this.filterCategory) {
      filtered = filtered.filter(p => p.category === this.filterCategory);
    }

    if (this.filterMinPrice !== null) {
      filtered = filtered.filter(p => p.price >= this.filterMinPrice!);
    }

    if (this.filterMaxPrice !== null) {
      filtered = filtered.filter(p => p.price <= this.filterMaxPrice!);
    }

    filtered.sort((a, b) => {
      let comparison = 0;
      switch (this.sortBy) {
        case 'price':
          comparison = a.price - b.price;
          break;
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'rating':
          comparison = (a.rating || 0) - (b.rating || 0);
          break;
        default:
          comparison = 0;
      }
      return this.sortOrder === 'asc' ? comparison : -comparison;
    });

    const startIndex = (this.currentPage - 1) * this.pageSize;
    return filtered.slice(startIndex, startIndex + this.pageSize);
  }

  onSearch(term: string): void {
    this.searchTerm = term;
    this.currentPage = 1;
    this.updateViewModel();
  }

  onFilterChange(filters: { category?: string; minPrice?: number; maxPrice?: number }): void {
    if (filters.category !== undefined) {
      this.filterCategory = filters.category;
    }
    if (filters.minPrice !== undefined) {
      this.filterMinPrice = filters.minPrice;
    }
    if (filters.maxPrice !== undefined) {
      this.filterMaxPrice = filters.maxPrice;
    }
    this.currentPage = 1;
    this.updateViewModel();
  }

  onSortChange(sortBy: string, sortOrder: 'asc' | 'desc'): void {
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;
    this.updateViewModel();
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateViewModel();
    }
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.currentPage = 1;
    this.calculateTotalPages();
    this.updateViewModel();
  }

  getCategories(): string[] {
    const categories = new Set(this.products.map(p => p.category));
    return Array.from(categories).sort();
  }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}
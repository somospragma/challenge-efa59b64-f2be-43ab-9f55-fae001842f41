import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  HostBinding
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Product } from '@app/core/models/product.model';
import { CurrencyFormatPipe } from '@app/shared/pipes/currency-format.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CurrencyFormatPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article 
      class="product-card" 
      [class.product-card--featured]="product.featured"
      [class.product-card--out-of-stock]="!product.inStock"
      [attr.aria-labelledby]="'product-title-' + product.id"
      role="article"
    >
      <div class="product-card__image-container">
        <img 
          [src]="product.imageUrl" 
          [alt]="product.name + ' product image'"
          class="product-card__image"
          loading="lazy"
          [routerLink]="['/product', product.id]"
          tabindex="0"
          (keydown.enter)="navigateToProduct(product.id)"
        />
        <span 
          *ngIf="product.discountPercentage" 
          class="product-card__discount-badge"
          aria-label="Discount applied"
        >
          -{{ product.discountPercentage }}%
        </span>
        <span 
          *ngIf="!product.inStock" 
          class="product-card__out-of-stock-badge"
        >
          Out of Stock
        </span>
      </div>

      <div class="product-card__content">
        <h3 
          [id]="'product-title-' + product.id"
          class="product-card__title"
          [routerLink]="['/product', product.id]"
          tabindex="0"
          (keydown.enter)="navigateToProduct(product.id)"
        >
          {{ product.name }}
        </h3>

        <p class="product-card__description">
          {{ product.description | truncateText:100 }}
        </p>

        <div class="product-card__price-container">
          <span 
            class="product-card__price"
            [class.product-card__price--discounted]="product.discountPercentage"
          >
            {{ product.price | currencyFormat }}
          </span>
          <span 
            *ngIf="product.discountPercentage" 
            class="product-card__original-price"
          >
            {{ calculateOriginalPrice(product.price, product.discountPercentage) | currencyFormat }}
          </span>
        </div>

        <div class="product-card__rating" 
             *ngIf="product.rating" 
             [attr.aria-label]="'Rating: ' + product.rating + ' out of 5 stars'"
        >
          <span 
            *ngFor="let star of getStarArray(product.rating)" 
            class="product-card__star"
            [class.product-card__star--filled]="star <= product.rating"
            aria-hidden="true"
          >
            ★
          </span>
          <span class="product-card__rating-count">
            ({{ product.reviewCount }})
          </span>
        </div>

        <div class="product-card__actions">
          <button 
            class="product-card__add-to-cart"
            [disabled]="!product.inStock"
            (click)="onAddToCart($event)"
            [attr.aria-label]="'Add ' + product.name + ' to cart'"
          >
            <span class="product-card__cart-icon" aria-hidden="true">🛒</span>
            Add to Cart
          </button>
          <button 
            class="product-card__wishlist"
            (click)="onToggleWishlist($event)"
            [attr.aria-label]="isInWishlist ? 'Remove ' + product.name + ' from wishlist' : 'Add ' + product.name + ' to wishlist'"
            [attr.aria-pressed]="isInWishlist"
          >
            <span aria-hidden="true">{{ isInWishlist ? '❤️' : '🤍' }}</span>
          </button>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .product-card {
      display: flex;
      flex-direction: column;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease-in-out;
      height: 100%;
      box-sizing: border-box;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      }

      &:focus-within {
        outline: 2px solid #1976d2;
        outline-offset: 2px;
      }
    }

    .product-card--featured {
      border: 2px solid #1976d2;
    }

    .product-card--out-of-stock {
      opacity: 0.7;

      .product-card__image {
        filter: grayscale(50%);
      }
    }

    .product-card__image-container {
      position: relative;
      width: 100%;
      aspect-ratio: 4 / 3;
      overflow: hidden;
      background: #f5f5f5;
    }

    .product-card__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
      }
    }

    .product-card__discount-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      background: #d32f2f;
      color: #ffffff;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 13px;
      font-weight: 700;
    }

    .product-card__out-of-stock-badge {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.75);
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 600;
    }

    .product-card__content {
      display: flex;
      flex-direction: column;
      padding: 16px;
      gap: 8px;
      flex: 1;
    }

    .product-card__title {
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 0;
      cursor: pointer;
      transition: color 0.2s ease-in-out;
      line-height: 1.3;

      &:hover {
        color: #1976d2;
      }

      &:focus {
        outline: none;
        text-decoration: underline;
      }
    }

    .product-card__description {
      font-size: 14px;
      color: #666666;
      margin: 0;
      line-height: 1.5;
      flex: 1;
    }

    .product-card__price-container {
      display: flex;
      align-items: baseline;
      gap: 8px;
      margin-top: 4px;
    }

    .product-card__price {
      font-size: 22px;
      font-weight: 700;
      color: #1a1a1a;

      &--discounted {
        color: #d32f2f;
      }
    }

    .product-card__original-price {
      font-size: 16px;
      color: #999999;
      text-decoration: line-through;
    }

    .product-card__rating {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .product-card__star {
      font-size: 16px;
      color: #e0e0e0;

      &--filled {
        color: #ffc107;
      }
    }

    .product-card__rating-count {
      font-size: 13px;
      color: #666666;
      margin-left: 4px;
    }

    .product-card__actions {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }

    .product-card__add-to-cart {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 16px;
      border: none;
      border-radius: 8px;
      background: #1976d2;
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s ease-in-out;

      &:hover:not(:disabled) {
        background: #1565c0;
      }

      &:disabled {
        background: #e0e0e0;
        color: #999999;
        cursor: not-allowed;
      }

      &:focus-visible {
        outline: 2px solid #1976d2;
        outline-offset: 2px;
      }
    }

    .product-card__cart-icon {
      font-size: 16px;
    }

    .product-card__wishlist {
      padding: 12px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background: #ffffff;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      font-size: 18px;

      &:hover {
        border-color: #e91e63;
        background: #fff5f8;
      }

      &:focus-visible {
        outline: 2px solid #e91e63;
        outline-offset: 2px;
      }
    }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() isInWishlist = false;
  @Output() addToCart = new EventEmitter<Product>();
  @Output() toggleWishlist = new EventEmitter<Product>();

  @HostBinding('class') hostClass = 'product-card-wrapper';

  getStarArray(rating: number): number[] {
    return Array.from({ length: 5 }, (_, i) => i + 1);
  }

  calculateOriginalPrice(price: number, discountPercentage: number): number {
    if (!price || !discountPercentage) {
      return price;
    }
    const discountMultiplier = 1 - (discountPercentage / 100);
    const originalPrice = price / discountMultiplier;
    return Math.round(originalPrice * 100) / 100;
  }

  onAddToCart(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    
    if (!this.product || !this.product.inStock) {
      console.warn('Cannot add out-of-stock product to cart:', this.product?.id);
      return;
    }

    this.addToCart.emit(this.product);
  }

  onToggleWishlist(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    
    if (!this.product) {
      console.warn('Cannot toggle wishlist: no product provided');
      return;
    }

    this.toggleWishlist.emit(this.product);
  }

  navigateToProduct(productId: string | number): void {
    if (!productId) {
      console.warn('Cannot navigate: no product ID provided');
      return;
    }
  }
}
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product!: Product;
  quantity: number = 1;

  constructor(private cartService: CartService) {}

  onSubmit(): void {
    this.cartService.addToCart(this.product, this.quantity);
  }
}

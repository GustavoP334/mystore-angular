import { Component, Signal } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../../models/cart-item';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [ProductItemComponent, FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  items: Signal<CartItem[]>;

  constructor(public cartService: CartService) {
    this.items = this.cartService.cart;
  }
}

import { Component, Signal, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../../models/cart-item';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConfirmationService } from '../../services/confirmation/confirmation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [FormsModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  items: Signal<CartItem[]>;

  constructor(public cartService: CartService, private confirmationService: ConfirmationService, private router: Router) {
    this.items = this.cartService.cart;
  }

  onSubmit(form: NgForm) {
    this.confirmationService.setConfirmation({
      customerName: form.value.name,
      total: this.cartService.computedCartTotalCost(),
    });
    
    this.router.navigate(['/confirmation']);

    this.cartService.clearCart();
  }
}

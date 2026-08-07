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

  name = '';
  address = '';
  creditCard = '';

  nameError = '';
  addressError = '';
  creditCardError = '';

  constructor(public cartService: CartService, private confirmationService: ConfirmationService, private router: Router) {
    this.items = this.cartService.cart;
  }

  validateName(value: string) {
    this.nameError = value && value.length >= 3 ? '' : 'Full name must be at least 3 characters.';
  }

  validateAddress(value: string) {
    this.addressError = value && value.length >= 6 ? '' : 'Address must be at least 6 characters.';
  }

  validateCreditCard(value: string) {
    this.creditCardError = /^[0-9]{16}$/.test(value) ? '' : 'Please enter exactly 16 digits, numbers only.';
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

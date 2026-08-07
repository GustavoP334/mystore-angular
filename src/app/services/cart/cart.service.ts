import { Injectable, signal } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private _cart = signal<CartItem[]>([]);
    cart = this._cart.asReadonly();

    constructor() {}

    addToCart(product: Product, quantity: number): void {
        const existingItem = this.cart().find(item => item.Product.id === product.id);
        if (existingItem) {
            existingItem.Quantity += quantity;
            this._cart.update(cart => [...cart]);
        } else {
            this._cart.set([...this._cart(), { Product: product, Quantity: quantity }]);
        }

        alert(`${quantity} ${product.name}(s) added to cart`);
    }

    removeFromCart(productId: number): void {
        const updatedCart = this._cart().filter(item => item.Product.id !== productId);
        this._cart.set(updatedCart);

        alert("Product removed from cart");
    }

    updateQuantity(productId: number, quantity: number): void {
        const itemIndex = this._cart().findIndex(item => item.Product.id === productId);
        
        if (itemIndex !== -1 && quantity > 0) {
            this._cart()[itemIndex].Quantity = quantity;
            this._cart.set([...this._cart()]);
        }

        if (itemIndex !== -1 && quantity <= 0) {
            this.removeFromCart(productId);
        }
    }

    computedCartTotalCost() {
        return this._cart().reduce((total, item) => total + item.Product.price * item.Quantity, 0);
    }
    
    computedCartTotal() {
        return this._cart().length;
    }
}

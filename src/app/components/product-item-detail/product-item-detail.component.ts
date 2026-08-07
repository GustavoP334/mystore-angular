import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products/products.service';
import { CartService } from '../../services/cart/cart.service';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './product-item-detail.component.html',
  styleUrl: './product-item-detail.component.css',
})
export class ProductItemDetailComponent {
  product = signal<Product[]>([]);
  quantity: number = 1;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private cartService: CartService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getProductById(id).subscribe((data: Product) => {
      this.product.set([data]);
    });
  }

  onSubmit(): void {
    this.cartService.addToCart(this.product()[0], this.quantity);
  }
}

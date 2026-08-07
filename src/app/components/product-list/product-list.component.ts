import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products/products.service';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = signal<Product[]>([]);

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.products.set(data);
    });
  }
}

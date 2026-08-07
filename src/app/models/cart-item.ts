import { Product } from './product.model';

export interface CartItem {
    Product: Product;
    Quantity: number;
}

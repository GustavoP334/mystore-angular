import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products-detail/:id', component: ProductItemDetailComponent },
    { path: 'cart', component: CartComponent },
    { path: 'confirmation', component: ConfirmationComponent },
];

import { Routes } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { SelectedProductComponent } from '../selected-product/selected-product.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { AddtocartComponent } from '../addtocart/addtocart.component';

export const routes: Routes = [
    {
        path: '', component: LoginPageComponent
    },
    {
        path: 'product-list', component: ProductListComponent
    },
    {
        path: 'selected-product', component: SelectedProductComponent
    },
    {
        path: 'add', component: AddProductComponent
    },
    {
        path: 'addtocart', component: AddtocartComponent
    }
];

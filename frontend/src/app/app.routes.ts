import { Routes } from '@angular/router';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { CartComponent } from './features/cart/cart/cart.component';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { AdminProductsComponent } from './features/admin/admin-products/admin-products.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [

    {path:'',component:ProductListComponent},
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent},
    {path:'product/:slug',component:ProductDetailsComponent},
    {path:'cart',component:CartComponent},
    {path:'admin/product',component:AdminProductsComponent, canActivate: [authGuard]},
    // {path:'admin/product/new',component:produc}
    {path:'admin/product/new',component:AdminProductsComponent, canActivate: [authGuard]}
];

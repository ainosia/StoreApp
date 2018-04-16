import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '@shop/products/products.component';
import { ProductComponent } from '@shop/product/product.component';
import { CartComponent } from '@shop/cart/cart.component';
import { OrdersComponent } from '@shop/orders/orders.component';
import { CustomerGuard } from '@auth/customer.guard';


const routes: Routes = [
  { path: 'tienda', component: ProductsComponent },
  { path: 'producto/:id', component: ProductComponent },
  { path: 'cesta', component: CartComponent, canActivate: [CustomerGuard] },
  { path: 'pedidos', component: OrdersComponent, canActivate: [CustomerGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }

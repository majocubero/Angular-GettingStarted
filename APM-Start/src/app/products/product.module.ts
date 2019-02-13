import { NgModule } from '@angular/core';
import {ProductsComponent} from './products.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RouterModule} from '@angular/router';
import {ProductDetailGuard} from '../guards/product-detail.guard';
import {StarsModule} from '../stars/stars.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    StarsModule,
    RouterModule.forChild([
      {path: 'products', component: ProductsComponent},
      {path: 'product/:id',
        canActivate:[ProductDetailGuard],
        component: ProductDetailComponent}, //guard to prevent id from being <0 or other type than numeric.
      ])
  ]
})
export class ProductModule { }

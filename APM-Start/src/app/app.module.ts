import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ConvertToSpacesPipePipe } from './pipes/convert-to-spaces-pipe.pipe';
import { StarComponent } from './stars/star.component';
import {HttpClientModule} from '@angular/common/http';
import { WelcomePageComponent } from './welcome/welcome-page.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductDetailGuard} from './guards/product-detail.guard';
import {RouterModule} from '@angular/router';
import {ProductModule} from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent
  ],
  imports: [
    ProductModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomePageComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'product/:id', canActivate:[ProductDetailGuard], component: ProductDetailComponent}, //guard to prevent id from being <0 or other type than numeric.
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},//default rout
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ], {useHash: true})
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ConvertToSpacesPipePipe } from './pipes/convert-to-spaces-pipe.pipe';
import { StarComponentComponent } from './shared/star-component.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ConvertToSpacesPipePipe,
    StarComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

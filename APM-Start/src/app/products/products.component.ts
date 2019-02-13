import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;
  private _listFilter: string;

  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private productService : ProductService) {
    this.productService = productService;
  }

  ngOnInit() {
    this.productService.getProduct().subscribe(products =>{
        this.products = products;
        this.filteredProducts = this.products;
    },
      error => this.errorMessage = <any>error

    );
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onRatingClicked (message: string): void {
    this.pageTitle = "Product List: " + message;
  }

  //Getters and setters.
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(value): this.products;
  }

}

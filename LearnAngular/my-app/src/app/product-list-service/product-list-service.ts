import { Component } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Product } from '../classes/IProduct';

@Component({
  selector: 'app-product-list-service',
  standalone: false,
  styleUrl: './product-list-service.css',
  templateUrl: './product-list-service.html',
})
export class ProductListService {
  min_price: number = 0;
  max_price: number = 10;
  products: Product[] = [];
  constructor(private ps: ProductService) {
    //this.products = ps.getProductList();
  }
  ngOnInit():void {
    this.products = this.ps.getProductList();
  }
  callFilterProductListByPrice() {
    this.products = this.ps.filterProductListByPrice(this.min_price, this.max_price);
  }
}

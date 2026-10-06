import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductImage } from '../classes/IProductImage';
import { ProductImageService } from '../services/product-image-service';

// Ex 13: Json Array Model – Product Event
@Component({
  selector: 'app-product-image-event-component',
  standalone: false,
  styleUrl: './product-image-event-component.css',
  templateUrl: './product-image-event-component.html',
})
export class ProductImageEventComponent {
  products: ProductImage[] = [];

  constructor(private pservice: ProductImageService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.pservice.getProductsWithImages();
  }

  // Bấm "Details" -> chuyển sang trang chi tiết: /product-image-event/p1
  viewDetail(p: ProductImage) {
    this.router.navigate(['/product-image-event', p.ProductId]);
  }
}

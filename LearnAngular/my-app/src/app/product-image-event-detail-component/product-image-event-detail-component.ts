import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductImage } from '../classes/IProductImage';
import { ProductImageService } from '../services/product-image-service';

// Ex 13: màn hình chi tiết sản phẩm, đọc tham số :id từ URL
@Component({
  selector: 'app-product-image-event-detail-component',
  standalone: false,
  styleUrl: './product-image-event-detail-component.css',
  templateUrl: './product-image-event-detail-component.html',
})
export class ProductImageEventDetailComponent {
  selectedProduct = signal<ProductImage | null>(null);

  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: ProductImageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      (param) => {
        let id = param.get('id');
        if (id != null) {
          this.selectedProduct.set(this._fs.getProductDetail(id) ?? null);
        }
      }
    );
  }

  // Bấm "Go Back" -> quay lại danh sách sản phẩm
  goBack() {
    this.router.navigate(['/product-image-event']);
  }
}

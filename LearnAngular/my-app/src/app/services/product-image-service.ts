import { Injectable } from '@angular/core';
import { ProductImage } from '../classes/IProductImage';

// Ex 13: dữ liệu được khai báo trong Service (Declared data in Service)
@Injectable({
  providedIn: 'root',
})
export class ProductImageService {
  productsImage: ProductImage[] = [
    { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: 'https://bizweb.dktcdn.net/thumb/large/100/469/765/products/1503-9de8f3562b364e56b550ff30bc493122-2c0db7cc76fd4b7f8b3c767fb24bc277-d4f804d8fc474b4bae5f628ff0d632e0-master.jpg' },
    { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'https://product.hstatic.net/1000288770/product/nuoc_ngot_pepsi_cola_lon_330ml_5d1df64d846f4f93aa666c723cea177d_compact.jpg' },
    { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'https://img.tgdd.vn/imgt/bhx/f_webp,fit_outside,quality_95,s_1560x1168/https://cdnv2.tgdd.vn/bhx-static/bhx/Products/Images/3226/76519/bhx/nuoc-tang-luc-sting-dau-sleek-lon-330ml_202509291421449068.jpg' },
  ];

  constructor() {}

  getProductsWithImages(): ProductImage[] {
    return this.productsImage;
  }

  getProductDetail(id: any): ProductImage | undefined {
    return this.productsImage.find(x => x.ProductId == id);
  }
}

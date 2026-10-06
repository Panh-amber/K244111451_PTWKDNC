import { Injectable } from '@angular/core';
import { Catalog } from '../classes/ICatalog';

// Ex 14: CatalogService - mỗi danh mục (Category) chứa danh sách sản phẩm (Products)
@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  datas: Catalog[] = [
    {
      Cateid: 'cate1', CateName: 'nuoc ngot',
      Products: [
        { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: 'https://bizweb.dktcdn.net/thumb/large/100/469/765/products/1503-9de8f3562b364e56b550ff30bc493122-2c0db7cc76fd4b7f8b3c767fb24bc277-d4f804d8fc474b4bae5f628ff0d632e0-master.jpg' },
        { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: 'https://product.hstatic.net/1000288770/product/nuoc_ngot_pepsi_cola_lon_330ml_5d1df64d846f4f93aa666c723cea177d_compact.jpg' },
        { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: 'https://img.tgdd.vn/imgt/bhx/f_webp,fit_outside,quality_95,s_1560x1168/https://cdnv2.tgdd.vn/bhx-static/bhx/Products/Images/3226/76519/bhx/nuoc-tang-luc-sting-dau-sleek-lon-330ml_202509291421449068.jpg' },
      ],
    },
    {
      Cateid: 'cate2', CateName: 'Bia',
      Products: [
        { ProductId: 'p4', ProductName: 'Heineken', Price: 500, Image: 'https://img.tgdd.vn/imgt/bhx/f_webp,fit_outside,quality_95,s_1560x1168/https://cdnv2.tgdd.vn/bhx-static/bhx/production/2025/12/image/Products/Images/2282/200637/bhx/bia-heineken-silver-lon-330ml_202512301357376940.jpg' },
        { ProductId: 'p5', ProductName: '333', Price: 400, Image: 'https://douongnhapkhau.com/wp-content/uploads/2025/12/18133-94894.jpg' },
        { ProductId: 'p6', ProductName: 'Sai Gon', Price: 600, Image: 'https://img.tgdd.vn/imgt/bhx/f_webp,fit_outside,quality_95,s_1560x1168/https://cdnv2.tgdd.vn/bhx-static/bhx/production/2026/2/image/Products/Images/2282/158346/bhx/bia-sai-gon-lager-lon-330ml_202602231136493971.jpg' },
      ],
    },
  ];

  constructor() {}

  getCategories(): Catalog[] {
    return this.datas;
  }
}

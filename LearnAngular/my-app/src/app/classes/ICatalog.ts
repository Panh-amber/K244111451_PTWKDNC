// Ex 14: Catalog model - mỗi danh mục chứa một mảng sản phẩm (Json Array lồng nhau)
import { ProductImage } from './IProductImage';

export interface Catalog {
  Cateid: string;
  CateName: string;
  Products: ProductImage[];
}

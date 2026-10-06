import { Component } from '@angular/core';
import { Catalog } from '../classes/ICatalog';
import { CatalogService } from '../services/catalog-service';

// Ex 14: Json Array Model – Product - Catalog (dùng vòng lặp lồng nhau)
@Component({
  selector: 'app-product-catalog-component',
  standalone: false,
  styleUrl: './product-catalog-component.css',
  templateUrl: './product-catalog-component.html',
})
export class ProductCatalogComponent {
  categories: Catalog[] = [];

  constructor(private _service: CatalogService) {}

  ngOnInit(): void {
    this.categories = this._service.getCategories();
  }
}

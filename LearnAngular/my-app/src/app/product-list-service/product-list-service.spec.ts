import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListService } from './product-list-service';

describe('ProductListService', () => {
  let component: ProductListService;
  let fixture: ComponentFixture<ProductListService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListService],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

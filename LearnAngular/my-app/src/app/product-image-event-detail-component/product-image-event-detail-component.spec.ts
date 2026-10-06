import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductImageEventDetailComponent } from './product-image-event-detail-component';

describe('ProductImageEventDetailComponent', () => {
  let component: ProductImageEventDetailComponent;
  let fixture: ComponentFixture<ProductImageEventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductImageEventDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductImageEventDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

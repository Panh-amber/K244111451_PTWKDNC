import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductImageEventComponent } from './product-image-event-component';

describe('ProductImageEventComponent', () => {
  let component: ProductImageEventComponent;
  let fixture: ComponentFixture<ProductImageEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductImageEventComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductImageEventComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

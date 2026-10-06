import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { CustomerHttpService } from './customer-http-service';

describe('CustomerHttpService', () => {
  let service: CustomerHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(CustomerHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

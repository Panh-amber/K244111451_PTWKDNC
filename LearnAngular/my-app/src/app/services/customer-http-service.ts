import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { CustomerGroup } from '../classes/ICustomer';

// Ex 18: đọc dữ liệu nhóm khách hàng từ file JSON bằng Http Service (có xử lý lỗi)
@Injectable({
  providedIn: 'root',
})
export class CustomerHttpService {
  private _url: string = "/datasets/customers.json";

  constructor(private _http: HttpClient) {}

  getCustomerGroups(): Observable<CustomerGroup[]> {
    return this._http.get<CustomerGroup[]>(this._url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message));
  }
}

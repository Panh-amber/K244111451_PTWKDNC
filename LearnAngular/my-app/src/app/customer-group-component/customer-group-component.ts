import { Component, signal } from '@angular/core';
import { CustomerGroup } from '../classes/ICustomer';
import { CustomerHttpService } from '../services/customer-http-service';

// Ex 18: Json Array Model – Group Customers
// = hiển thị dữ liệu theo nhóm (như Ex 14) + đọc dữ liệu bằng Http Service (như Ex 15/16)
@Component({
  selector: 'app-customer-group-component',
  standalone: false,
  styleUrl: './customer-group-component.css',
  templateUrl: './customer-group-component.html',
})
export class CustomerGroupComponent {
  customerGroups = signal<CustomerGroup[]>([]);
  errMessage = signal<string>("");

  constructor(private _service: CustomerHttpService) {}

  ngOnInit(): void {
    this._service.getCustomerGroups().subscribe({
      next: (data) => {
        this.customerGroups.set(data);
        this.errMessage.set("");
      },
      error: (err) => {
        this.customerGroups.set([]); // đưa về "Safe State" khi lỗi
        this.errMessage.set(err.message);
      }
    });
  }
}

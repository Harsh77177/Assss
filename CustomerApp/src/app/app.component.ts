import { Component } from '@angular/core';
import { Customer } from './customer.model'; 
import { CustomerService } from './customer-service.service';
@Component({
  selector: 'app-root',
  template: `
<app-header></app-header>
<div class="container">
<h2>Add Customer</h2>
<form (ngSubmit)="newCustomer()" #customerForm="ngForm">
<label for="customerId">Customer ID:</label>
<input type="text" id="customerId" name="customerId" [(ngModel)]="newCustomerData.customerId" required>
<label for="customerName">Customer Name:</label>
<input type="text" id="customerName" name="customerName" [(ngModel)]="newCustomerData.customerName" required>
<label for="customerAddress">Customer Address:</label>
<input type="text" id="customerAddress" name="customerAddress" [(ngModel)]="newCustomerData.customerAddress" required>
<button type="submit" [disabled]="!customerForm.form.valid">Add Customer</button>
</form>
<h2>Customer List</h2>
<table>
<thead>
<tr>
<th>Customer ID</th>
<th>Customer Name</th>
<th>Customer Address</th>
</tr>
</thead>
<tbody>
<tr *ngFor="let customer of customers">
<td>{{ customer.customerId }}</td>
<td>{{ customer.customerName }}</td>
<td>{{ customer.customerAddress }}</td>
</tr>
</tbody>
</table>
</div>
  `,
})
export class AppComponent {
  customers: Customer[] = [];
  newCustomerData: Customer = { customerId: '', customerName: '', customerAddress: '' };
  constructor(private customerService: CustomerService) {}
  ngOnInit() {
    this.getCustomers();
  }
  getCustomers() {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.customers = data;
    });
  }
  newCustomer() {
    this.customerService.addCustomer(this.newCustomerData).subscribe(() => {
      this.getCustomers(); // Refresh the customer list
      this.newCustomerData = { customerId: '', customerName: '', customerAddress: '' };
    });
  }
}
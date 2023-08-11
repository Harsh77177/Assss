import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.model'; // Import Customer model
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000/customer'; // Replace with your API endpoint
  constructor(private http: HttpClient) {}
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }
  addCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.apiUrl, customer);
  }
}



 


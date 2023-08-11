import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HttpClient
import { AppComponent } from './app.component';

import { HeaderComponent } from './header-component/header-component.component';
import { CustomerService } from './customer-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent // Add HeaderComponent to declarations
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to imports
    HttpClientModule // Add HttpClientModule to imports
  ],
  providers: [CustomerService], // Add CustomerService to providers
  bootstrap: [AppComponent] // Add AppComponent to bootstrap
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login/login.component';
import { HeaderComponent } from './header/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './dashboard/account/user/user.component';
import { InvoiceListComponent } from './dashboard/invoice/invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './dashboard/invoice/invoice-detail/invoice-detail.component';
import { InvoiceStartComponent } from './dashboard/invoice/invoice-start/invoice-start.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { timeRegistrationService } from './services/timeRegistration.service';
import { invoiceService } from './services/invoice.service';
import { userService } from './services/user.service';
import { calculateService } from './services/calculate.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    UserComponent,
    InvoiceListComponent,
    InvoiceDetailComponent,
    InvoiceStartComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [timeRegistrationService,invoiceService, userService, calculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

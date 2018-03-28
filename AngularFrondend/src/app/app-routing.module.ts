import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceStartComponent } from './dashboard/invoice/invoice-start/invoice-start.component';
import { InvoiceDetailComponent } from './dashboard/invoice/invoice-detail/invoice-detail.component';
import { InvoiceListComponent } from './dashboard/invoice/invoice-list/invoice-list.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        { path: '', component: InvoiceListComponent },
        { path: 'invoice/nr/:id', component: InvoiceDetailComponent },
      ]
    },

]
  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

}

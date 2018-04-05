import { Component, OnInit } from '@angular/core';
import { invoice } from '../../../shared/invoice.model';
import { invoiceService } from '../../../services/invoice.service';
import { Subscription } from 'rxjs/Subscription';
import { userService } from '../../../services/user.service';
import { user } from '../../../shared/user.model';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  invoice: invoice[];
  subscription: Subscription;
  currentUser: user;
  constructor(private invoiceService: invoiceService,private userService: userService) { }

  ngOnInit() {
    this.currentUser = this.userService.user
    this.invoiceService.getAll(this.currentUser.UserId)
      .then(ing => this.invoice = ing)
      .catch(error => console.log(error));
    this.subscription = this.invoiceService.invoiceChanged
      .subscribe(
      (invoice: invoice[]) => {
        this.invoice = invoice;
      }
      );
  }

}

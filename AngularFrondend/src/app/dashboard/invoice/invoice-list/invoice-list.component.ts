import { Component, OnInit } from '@angular/core';
import { invoice } from '../../../shared/invoice.model';
import { invoiceService } from '../../../services/invoice.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  invoice: invoice[];
  subscription: Subscription;
  constructor(private invoiceService: invoiceService) { }

  ngOnInit() {
    this.invoiceService.getAll("lars")
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

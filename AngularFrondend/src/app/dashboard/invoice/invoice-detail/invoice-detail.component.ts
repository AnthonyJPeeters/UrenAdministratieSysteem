import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { invoiceService } from '../../../services/invoice.service';
import { invoice } from '../../../shared/invoice.model';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  invoice: invoice;
  constructor( private router: Router, private route: ActivatedRoute,private invoiceService: invoiceService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        console.log(params['id']);
        this.invoiceService.getOne(params['id'])
          .then(rec => this.invoice = rec[0])
          .catch(error => console.log(error));
      }
    );
  }

}

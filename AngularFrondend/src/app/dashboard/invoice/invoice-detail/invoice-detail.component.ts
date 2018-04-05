import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { invoiceService } from '../../../services/invoice.service';
import { invoice } from '../../../shared/invoice.model';
import { userService } from '../../../services/user.service';
import { user } from '../../../shared/user.model';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  invoice: invoice;
  user: user
  constructor( private router: Router,private userService: userService, private route: ActivatedRoute,private invoiceService: invoiceService) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        console.log(params['id']);
        this.invoiceService.getOne(params['id'])
          .then(rec =>{ 
            this.invoice = rec[0]
            this.user = this.userService.user
          })
          .catch(error => console.log(error));
      }
    );
  }

}

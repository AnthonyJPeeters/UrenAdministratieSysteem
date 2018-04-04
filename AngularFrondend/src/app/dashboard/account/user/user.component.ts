import { Component, OnInit } from '@angular/core';
import { isDate } from 'util';
import { timeRegistrationService } from '../../../services/timeRegistration.service';
import { time } from '../../../shared/time.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Data } from '@angular/router/src/config';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { forEach } from '@angular/router/src/utils/collection';
import { invoiceService } from '../../../services/invoice.service';
import { invoice } from '../../../shared/invoice.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  timeForm: FormGroup = null;
  updating: boolean = false;
  constructor(private tservice: timeRegistrationService,private invoiceService: invoiceService) { }

  ngOnInit() {
    this.timeForm = new FormGroup({
      'workedHours': new FormControl(Validators.required),
      'description': new FormControl("", Validators.required),
      'date': new FormControl(Validators.required),
      'uuid': new FormControl("lars", Validators.required),
      'paid': new FormControl("false", Validators.required),
    })
    let i = Date.now();
    this.change(i);
  }
  onSubmit() {
    if (this.updating) {
      this.tservice.update(this.timeForm.value)
    }
    else {
      this.tservice.post(this.timeForm.value);
      this.updating = true;
    }
  }

  change(searchValue: any) {
    let workedHours = null;
    this.tservice.getOne("lars", searchValue).then((b) => {
      workedHours = b.workedHours
      this.timeForm.controls['workedHours'].setValue(b.workedHours)
      this.timeForm.controls['description'].setValue(b.description)
      this.updating = true
    })

    if (workedHours === null) {
      this.updating = false;
      this.timeForm.controls['workedHours'].setValue("00:00")
      this.timeForm.controls['description'].setValue("")
    }
  }

  
  generateInvoice() {
    var totaltime  = this.tservice.getTotalPrice()
    console.log(totaltime)
    if(totaltime[0] != null)
    {

      this.invoiceService.post(new invoice("lars","true",totaltime[1],666,2))
    }
  }
}


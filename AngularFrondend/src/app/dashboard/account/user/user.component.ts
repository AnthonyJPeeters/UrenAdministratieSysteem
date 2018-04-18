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
import { userService } from '../../../services/user.service';
import { user } from '../../../shared/user.model';
import { calculateService } from '../../../services/calculate.service';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  timeForm: FormGroup = null;
  updating: Boolean = false;
  currentUser: user;
  constructor(private tservice: timeRegistrationService,
    private invoiceService: invoiceService, private calcservive: calculateService, private userService: userService) { }

  ngOnInit() {
    this.currentUser = this.userService.user
    console.log(this.currentUser.Name + " DIT IS TEST 2")
    this.timeForm = new FormGroup({
      'workedHours': new FormControl(Validators.required),
      'description': new FormControl("", Validators.required),
      'date': new FormControl(Validators.required),
      'uuid': new FormControl(this.currentUser.UserId, Validators.required),
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
    this.tservice.getOne(this.currentUser.UserId, searchValue).then((b) => {
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
    this.tservice.getTotalPrice().then((t) => {
          var returnValue = this.tservice.twodArr;
          if(returnValue[0] != null)
          {
            console.log(returnValue[0] + " " +  this.currentUser.CurrentWage)
            this.calcservive.getOne(returnValue[0], this.currentUser.CurrentWage).then((result) => {

              this.invoiceService.post(new invoice(this.currentUser.UserId,"true",returnValue[1],result,2))
            })
          }
          //TODO: logic
    })
  }
}


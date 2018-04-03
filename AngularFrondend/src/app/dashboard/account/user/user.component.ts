import { Component, OnInit } from '@angular/core';
import { isDate } from 'util';
import { timeRegistrationService } from '../../../services/timeRegistration.service';
import { time } from '../../../shared/time.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Data } from '@angular/router/src/config';
import { Time } from '@angular/common/src/i18n/locale_data_api';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  timeForm: FormGroup = null;
  updating: boolean = false;
  constructor(private tservice: timeRegistrationService) { }

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
  timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    var rest: Number[] = [rhours, rminutes];
    return rest;
  }
  getTotalPrice() {
    var notpaid: time[];
    var totalhours: number = 0;
    var totalminutes: number = null;
    var i =""
    this.tservice.getAllNotPaid("lars")
      .then((rec) =>{
        rec => notpaid = rec
        for(let i =0 ;i<=rec.length -1;i++){
          var splitted = rec[i]["workedHours"].split(":")
          totalhours = totalhours + Number(splitted[0])
          totalminutes = totalminutes +  Number(splitted[1])
          rec[i]["paid"] = "true"
          this.tservice.update(rec[i])
        }
        var temp = this.timeConvert(totalminutes)
        totalhours = totalhours + Number(temp[0])
        console.log(totalhours + "." + temp[1]);
      })
      .catch(error => console.log(error));

  }
  generateInvoice() {
    console.log(this.getTotalPrice())
    
  }
}


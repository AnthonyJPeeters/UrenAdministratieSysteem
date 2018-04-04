import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { userService } from '../../services/user.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = null;
  isValidLogin: boolean = false;
  constructor(private usrService: userService,private router: Router ) {
   }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl("",Validators.required)
    })
  }

  onSubmit() {
      //console.log(this.loginForm.controls["username"].value)
      this.usrService.getOne(this.loginForm.controls["username"].value).then(response => {
          console.log(response);
          if (response != null){
            this.router.navigate(['dashboard']);
          }
      })
  }
}

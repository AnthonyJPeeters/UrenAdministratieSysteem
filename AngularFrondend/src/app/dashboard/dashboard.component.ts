import { Component, OnInit } from '@angular/core';
import { userService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private usrService: userService ) { }

  ngOnInit() {
    console.log(this.usrService.user + " DIT IS EEN TEST")
  }

}

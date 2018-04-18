import { Injectable } from "@angular/core";
import { time } from "../shared/time.model";
import { environment } from "../../environments/environment";
import { Subject } from "rxjs/Subject";
import { Http, Headers } from "@angular/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { userService } from "./user.service";
import { user } from "../shared/user.model";

@Injectable()
export class timeRegistrationService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = 'https://timeregistration2.herokuapp.com/api/timeregistration'; // URL to web api
  private time: time = null ;
  public twodArr: any; 
  tasksChanged = new Subject<time>();
  


  constructor(private http: Http, private userService: userService) { }

  getOne(uuid: string, date: string) {
    return this.http.get(this.serverUrl + '/' + uuid + '/' + date, { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json()[0] as time;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  getAllNotPaid(uuid: string) {
    return this.http.get(this.serverUrl + '/' + uuid, { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json() as time[];
      })
      .catch(error => {
        return this.handleError(error);
      });
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
    var ids: String[] = [];
    var i =""
    
    return this.getAllNotPaid(this.userService.user.UserId)
      .then((rec) =>{
        notpaid = rec
        for(let i =0 ;i<=notpaid.length -1;i++){
          var splitted = notpaid[i]["workedHours"].split(":")
          totalhours = totalhours + Number(splitted[0])
          totalminutes = totalminutes +  Number(splitted[1])
          rec[i]["paid"] = "true"
          ids.push(rec[i]["_id"] + "")
          this.update(rec[i])
        }
        var temp = this.timeConvert(totalminutes)
        totalhours = totalhours + Number(temp[0])
        var totalTime = totalhours + "." + temp[1]
        console.log(totalTime);
        this.twodArr = [totalTime,ids];
      })
      .catch(error => console.log(error));

  }

  update(newtime: time) {
    this.http.put(this.serverUrl + '/' + newtime.uuid, newtime, { headers: this.headers }).toPromise()
    .then(response => {
      this.time = response.json() as time;
      return response.json() as time[];
    })
  }
  post(time: time) {
    this.http.post(this.serverUrl +"/" + time.uuid, time).toPromise()
    .then(response => {
      this.time = response.json() as time;
      return response.json() as time[];
    })
  }



  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }
} 
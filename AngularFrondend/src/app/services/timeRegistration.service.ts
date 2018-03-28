import { Injectable } from "@angular/core";
import { time } from "../shared/time.model";
import { environment } from "../../environments/environment";
import { Subject } from "rxjs/Subject";
import { Http, Headers } from "@angular/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class timeRegistrationService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = environment.serverUrl + '/timeregistration'; // URL to web api
  private time: time = null ;
  tasksChanged = new Subject<time>();


  constructor(private http: Http) { }

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

  update(newtime: time) {
    this.http.put(this.serverUrl + '/' + newtime.uuid + '/' + newtime.date, newtime, { headers: this.headers }).toPromise()
    .then(response => {
      this.time = response.json() as time;
      return response.json() as time[];
    })
  }
  post(time: time) {
    this.http.post(this.serverUrl, time).toPromise()
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
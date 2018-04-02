import { Injectable } from "@angular/core";
import { time } from "../shared/time.model";
import { environment } from "../../environments/environment";
import { Subject } from "rxjs/Subject";
import { Http, Headers } from "@angular/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { user } from "../shared/user.model";

@Injectable()
export class userService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  //TODO make this the user serverurl
  private serverUrl = environment.userServerUrl + '/user/'; // URL to web api
  private user: user[] = [];
  userChanged = new Subject<user[]>();


  constructor(private http: Http) { }

  public getAll() {
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        this.user = response.json() as user[];
        this.userChanged.next(this.user.slice());
        return response.json() as user[];
      })
      .catch(error => {
        return this.handleError(error);
      });
      
  }

  getOne(username: String) {
    return this.http.get(this.serverUrl + username, { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json() as user;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  private handleError(error: any): Promise<any> {
    console.log('handleError');
    return Promise.reject(error.message || error);
  }
} 
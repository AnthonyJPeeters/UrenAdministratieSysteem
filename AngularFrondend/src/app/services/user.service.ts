import { Injectable } from "@angular/core";
import { time } from "../shared/time.model";
import { environment } from "../../environments/environment";
import { Subject } from "rxjs/Subject";
import { Http, Headers } from "@angular/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { user } from "../shared/user.model";

@Injectable()
export class userService {
  private headers = new Headers({ 'Content-Type': 'text/plain' });
  //TODO make this the user serverurl
  private serverUrl = 'http://ec2-18-184-56-133.eu-central-1.compute.amazonaws.com/api/user/' ; // URL to web api
  private users: user[] = [];
  public user: user;
  userChanged = new Subject<user[]>();


  constructor(private http: Http) { }

  public getAll() {
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        this.users = response.json() as user[];
        this.userChanged.next(this.users.slice());
        return response.json() as user[];
      })
      .catch(error => {
        return this.handleError(error);
      });
      
  }

  getOne(username: String) {
    console.log(this.serverUrl + username);
    console.log(this.headers)
    return this.http.get(this.serverUrl + username, { headers: this.headers })
      .toPromise()
      .then(response => {
        this.user = response.json() as user;
        console.log(this.user)
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
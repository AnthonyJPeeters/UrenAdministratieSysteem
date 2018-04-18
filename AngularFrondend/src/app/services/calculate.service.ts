import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Subject } from "rxjs/Subject";
import { Http, Headers } from "@angular/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class calculateService {
  private headers = new Headers({ 'Content-Type': 'text/plain' });
  private serverUrl = environment.calculateServerUrl; // URL to web api

  constructor(private http: Http) { }

  getOne(value1: number, value2: number) {
    console.log(value1 + value2);
    return this.http.get(this.serverUrl + value1 + "/" + value2, { headers: this.headers })
      .toPromise()
      .then(response => {
        console.log(response.json())
        return response.json() as number;
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

import { Injectable } from "@angular/core";
import { time } from "../shared/time.model";
import { environment } from "../../environments/environment";
import { Subject } from "rxjs/Subject";
import { Http, Headers } from "@angular/http";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { invoice } from "../shared/invoice.model";

@Injectable()
export class invoiceService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = environment.serverUrl + '/invoice/'; // URL to web api
  private invoice: invoice[] = [];
  invoiceChanged = new Subject<invoice[]>();


  constructor(private http: Http) { }

  public getAll(uuid : string) {
    return this.http.get(this.serverUrl + uuid, { headers: this.headers })
      .toPromise()
      .then(response => {
        this.invoice = response.json() as invoice[];
        this.invoiceChanged.next(this.invoice.slice());
        return response.json() as invoice[];
      })
      .catch(error => {
        return this.handleError(error);
      });
      
  }

  getOne(id: number) {
    return this.http.get(this.serverUrl+ "nr/" + id, { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json() as invoice[];
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
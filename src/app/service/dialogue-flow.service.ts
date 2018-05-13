import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class DialogueFlowService {

  private baseURL: string = "https://console.dialogflow.com/api-client/demo/embedded/9fd2af3e-69e9-4814-ac06-55f4ae85589d/demoQuery";
  private token: string = environment.token;

  constructor(private http: Http) { }

  public getResponse(queryString: any) {
    let data = {
      query: queryString,
      sessionId: '12345'
    }
    return this.http
      .get(this.baseURL + '?q=' + 'hi' + '&sessionId=12345', { headers: this.getHeaders() })
      .map(res => {
        return res.json()
      })
  }

  public getHeaders() {
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Headers, RequestOptions, Http, Response } from '@angular/http';

@Injectable()
export class AuthHttp {

  constructor(private _authService:AuthService, private _http:Http) {
    // TODO: Request new token if the current one has expired.
    // let originalPost = _http.post;
    // _http.post = function(url:string, body:any, options:RequestOptions):Observable<Response> {
    //   if(_authService.isLogged) options.headers.append('Authorization', 'JWT ' + this._authService.token);
    //   return originalPost(url, body, options);
    // }
  }

  private createHeaders() {
    let headers = new Headers({ 'Authorization': 'JWT ' + this._authService.token });
    return new RequestOptions({ headers: headers });
  }

  get(url:string):Observable<Response> {
    return this._http.get(url,this.createHeaders())
  }

  post(url:string, data:any) {
    return this._http.post(url, data, this.createHeaders());
  }
}

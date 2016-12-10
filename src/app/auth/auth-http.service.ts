import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions, Response } from '@angular/http';

import { DefaultHttpService } from '../core/http/default-http.service';

import { AuthService } from './auth.service';


@Injectable()
export class AuthHttp {
  constructor(private _authService:AuthService,
              private _defaultHttpService: DefaultHttpService) { }

  private _createAuthorizationHeaders(requestOptions: RequestOptions) {
    let options = requestOptions ? requestOptions : new RequestOptions();
    let headers = new Headers({ 'Authorization': 'JWT ' + this._authService.token });
    options.headers = headers;

    return options;
  }

  get(url:string, options?: RequestOptions):Observable<Response> {
    return this._defaultHttpService.get(url, this._createAuthorizationHeaders(options));
  }

  post(url:string, body:any, options?: RequestOptions):Observable<Response> {
    return this._defaultHttpService.post(url, body, this._createAuthorizationHeaders(options));
  }

  patch(url:string, body:any, options?: RequestOptions):Observable<Response> {
    return this._defaultHttpService.patch(url, body, this._createAuthorizationHeaders(options));
  }

  delete(url:string, options?: RequestOptions):Observable<Response> {
    return this._defaultHttpService.delete(url, this._createAuthorizationHeaders(options));
  }
}

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable, Inject } from '@angular/core';

import { ApiUrlsService } from '../core/apiUrls.service';


@Injectable()
export class LoginService {
  constructor(private _http: Http,
              private _apiUrlsService: ApiUrlsService,
              @Inject('Window') private _window: Window) { }

  login(email:string, password:string):Observable<any> {
    return this._http.post(this._apiUrlsService.loginUrl, {"email": email, "password": password })
                     .map(res => res.json());
  }

  register():void {
    this._window.open(this._apiUrlsService.resiterUrl, '_blank');
  }
}

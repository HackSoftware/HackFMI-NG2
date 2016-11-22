import { Observable } from 'rxjs/Observable';
import { Injectable, Inject } from '@angular/core';

import { ApiUrlsService } from '../core/apiUrls.service';
import { DefaultHttpService } from '../core/defaultHttp.service';

import { LoginData } from './login.models';


@Injectable()
export class LoginService {
  constructor(private _apiUrlsService: ApiUrlsService,
              private _defaultHttpService: DefaultHttpService,
              @Inject('Window') private _window: Window) { }

  login(email:string, password:string):Observable<LoginData> {
    return this._defaultHttpService.post(this._apiUrlsService.loginUrl, {"email": email, "password": password })
                                   .map(res => res.json());
  }

  register():void {
    this._window.open(this._apiUrlsService.resiterUrl, '_blank');
  }
}

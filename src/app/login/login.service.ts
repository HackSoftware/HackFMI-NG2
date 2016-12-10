import { Observable } from 'rxjs/Observable';
import { Injectable, Inject } from '@angular/core';

import { ApiUrlsService } from '../core/apiUrls.service';
import { HandleHttpService } from '../core/handleHttp.service';
import { DefaultHttpService } from '../core/defaultHttp.service';

import { LoginData } from './login.models';


@Injectable()
export class LoginService {

  constructor(private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService,
              private _defaultHttpService: DefaultHttpService,
              @Inject('Window') private _window: Window) { }

  register():void {this._window.open(this._apiUrlsService.resiterUrl, '_blank');}

  login(email:string, password:string):Observable<LoginData> {
    var data = {"email": email, "password": password };

    return this._defaultHttpService.post(this._apiUrlsService.loginUrl, data)
                                   .map(res => <LoginData>res.json())
                                   .catch(err => this._handleHttp.handleError(err));
  }
}

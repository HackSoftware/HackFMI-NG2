import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiUrlsService } from './api-urls.service';
import { HandleHttpService } from './handle-http.service';

import { AuthHttp } from '../auth/authHttp.service';


@Injectable()
export class LogoutService {
  constructor(private _router: Router,
              private _authHttp: AuthHttp,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService) { }

  logout():Observable<any> {
    return this._authHttp.post(this._apiUrlsService.logoutUrl, {})
                         .catch(err => this._handleHttp.handleError(err));
  }
}

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiUrlsService } from '../core/apiUrls.service';


@Injectable()
export class LoginService {
  constructor(private _http: Http, private _apiUrlsService: ApiUrlsService) { }

  login(email:string, password:string):Observable<any> {
    return this._http.post(this._apiUrlsService.loginUrl, {"email": email, "password": password })
                     .map(res => res.json());
  }
}

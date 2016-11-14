import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';


@Injectable()
export class LoginService {
  private _loginUrl = environment.apiUrl + 'jwt-login/';

  constructor(private _http: Http) { }

  login(email:string, password:string):Observable<any> {
    return this._http.post(this._loginUrl, {"email": email, "password": password })
                     .map(res => res.json());
  }

}

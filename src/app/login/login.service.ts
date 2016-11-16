import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable, Inject } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { ApiUrlsService } from '../core/apiUrls.service';


@Injectable()
export class LoginService {
  constructor(private _http: Http,
              private _router: Router,
              private _authService:AuthService,
              private _apiUrlsService: ApiUrlsService,
              @Inject('Window') private _window: Window) { }

  login(email:string, password:string):void {
    this._http.post(this._apiUrlsService.loginUrl, {"email": email, "password": password })
              .map(res => res.json())
              .subscribe(
                data => this._handleSuccessfulLogin(data),
                err => console.log(err));
  }

  register():void {
    this._window.open(this._apiUrlsService.resiterUrl, '_blank');
  }

  private _handleSuccessfulLogin(data:any) {
    this._authService.setCurrentUser(data);

    /* Redirect to pre-requested page */
    if (this._authService.redirectUrl) {
      this._router.navigate([this._authService.redirectUrl]);
    } else {
      this._router.navigate(['home']);
    }
  }
}

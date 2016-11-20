import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LoginData } from '../login/login.models';

import { UserData } from './auth.models';

import 'jwt-decode/build/jwt-decode'


@Injectable()
export class AuthService implements CanActivate {
  private _currentUser: UserData = null;
  private _redirectUrl:string = null;

  constructor(private _router: Router) {
    this._currentUser = JSON.parse(localStorage.getItem('user-data'));
  }

  get redirectUrl() {
    return this._redirectUrl;
  }

  get currentUser() {
    return this._currentUser;
  }

  get token() {
    return this._currentUser.token;
  }

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
    var result: boolean = !!this._currentUser;

    if (!result) {
      this._router.navigate(['login']);
    }

    this._redirectUrl = state.url;
    return result;
  }

  setCurrentUser(data:LoginData):void {
    var token = data.token;
    var userData = jwt_decode(token);
    userData.token = token;
    this._currentUser = userData;
    localStorage.setItem('user-data', JSON.stringify(userData));
  }

  clearCurrentUser = (event:MouseEvent) => {
    event.preventDefault();
    this._currentUser = null;
    this._redirectUrl = null;
    localStorage.removeItem('user-data');
    this._router.navigate(['home']);
  }

  isLogged = ():boolean => !!this._currentUser;
}

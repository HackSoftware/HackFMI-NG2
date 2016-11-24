import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { LoginData } from '../login/login.models';

import { UserData } from './auth.models';

var jwt_decode = require('jwt-decode');


@Injectable()
export class AuthService {
  private _currentUser: UserData = null;
  private _redirectUrl:string = null;

  constructor(private _router: Router) {
    this._currentUser = JSON.parse(localStorage.getItem('user-data'));
  }

  get redirectUrl() {
    return this._redirectUrl;
  }

  set redirectUrl(url:string){
    this._redirectUrl = url;
  }

  get currentUser() {
    return this._currentUser;
  }

  get token() {
    return this._currentUser.token;
  }

  setCurrentUser(data:LoginData):void {
    var token = data.token;
    var userData = jwt_decode(token);
    userData.token = token;
    this._currentUser = userData;
    localStorage.setItem('user-data', JSON.stringify(userData));
  }

  clearCurrentUser():void {
    this._currentUser = null;
    this._redirectUrl = null;
    localStorage.removeItem('user-data');
    this._router.navigate(['home']);
  }

  isLogged = ():boolean => !!this._currentUser;
}

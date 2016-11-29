import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { LoginData } from '../login/login.models';

import { UserData } from './auth.models';

const jwt_decode = require('jwt-decode');


@Injectable()
export class AuthService {
  redirectUrl:string = null;
  userLoggedIn: EventEmitter<any>;
  userLoggedOut: EventEmitter<any>;
  private _currentUser: UserData = null;

  constructor(private _router: Router) {
    this._currentUser = JSON.parse(localStorage.getItem('user-data'));
    this.userLoggedIn = new EventEmitter();
    this.userLoggedOut = new EventEmitter();
  }

  get currentUser() {
    return this._currentUser;
  }

  get token() {
    return this._currentUser.token;
  }

  setCurrentUser(data:LoginData):void {
    let token = data.token;
    let userData = jwt_decode(token);
    userData.token = token;
    this._currentUser = userData;
    localStorage.setItem('user-data', JSON.stringify(userData));
    this.userLoggedIn.emit();
  }

  clearCurrentUser():void {
    this._currentUser = null;
    this.redirectUrl = null;
    localStorage.removeItem('user-data');
    this.userLoggedOut.emit();
    this._router.navigate(['home']);
  }

  isLogged = ():boolean => !!this._currentUser;
}
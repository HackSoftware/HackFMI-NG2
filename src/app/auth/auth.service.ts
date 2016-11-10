import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { IUserData, ILoginData } from './auth.interface';

import 'jwt-decode/build/jwt-decode'


@Injectable()
export class AuthService implements CanActivate {
  private _currentUser: IUserData = null;

  constructor(private _router: Router) {
    this._currentUser = JSON.parse(localStorage.getItem('user-data'));
  }

  canActivate(a: ActivatedRouteSnapshot, s:RouterStateSnapshot): boolean {
    var result: boolean = !!this._currentUser;
    if (!result) {
      this._router.navigate(['login']);
    }

    return result;
  }

  setCurrentUser(data:ILoginData):void {
    var token = data.token
    var userData = jwt_decode(token)
    userData.token = token;
    this._currentUser = userData;
    localStorage.setItem('user-data', JSON.stringify(userData));
  }

  clearCurrentUser = () => {
    this._currentUser = null;
    localStorage.removeItem('user-data');
    this._router.navigate(['login']);
  }

  isLogged = ():boolean => !!this._currentUser;
}

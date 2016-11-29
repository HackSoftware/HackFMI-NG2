import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../auth/auth.service';


@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private _router: Router, private _authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean {
    let result: boolean = !!this._authService.currentUser;

    if (!result) {
      this._router.navigate(['login']);
    }

    this._authService.redirectUrl = state.url;
    return result;
  }
}

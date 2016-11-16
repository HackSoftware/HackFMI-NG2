import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../auth/auth.service';


@Injectable()
export class TeamsGuardService implements CanActivate {
  constructor(private _router: Router, private _authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var result: boolean = !!this._authService.currentUser;

    if (!result) {
      this._router.navigate(['teams/public']);
    }

    return result;
  }
}

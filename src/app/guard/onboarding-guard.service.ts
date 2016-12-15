import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { MeService } from '../core/me/me.service';


@Injectable()
export class OnboardingGuardService implements CanActivate {
  private _redirectUrl: string = null;

  constructor(private _router: Router, private _meService: MeService) { }

  get redirectUrl() {
    return this._redirectUrl;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._meService.getSeasonMeInfo()
                          .map(data => this._handleOnboarding(data.is_competitor, state));
  }

  private _handleOnboarding(is_competitor: boolean, state: RouterStateSnapshot) {
    if (!is_competitor) {
      this._router.navigate(['onboarding']);
    }

    this._redirectUrl = state.url;

    return is_competitor;
  }
}

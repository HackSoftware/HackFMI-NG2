import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MeService } from '../core/me.service';


@Injectable()
export class OnboardingGuardService implements CanActivate {
  constructor(private _router: Router, private _meService: MeService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._meService.getSeasonMeInfo()
                          .map(
                            data => this._handleOnboarding(data.is_competitor),
                            err => console.log(err))
  }

  private _handleOnboarding(is_competitor: boolean) {
    if (!is_competitor) {
      this._router.navigate['onboarding'];
    }

    return is_competitor;
  }
}

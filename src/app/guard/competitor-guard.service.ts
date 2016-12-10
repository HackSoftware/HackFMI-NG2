import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Me } from '../core/core.models';
import { MeService } from '../core/me/me.service';


@Injectable()
export class CompetitorGuardService implements CanActivate {
  constructor(private _router: Router, private _meService: MeService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._meService.getSeasonMeInfo()
                          .map(data => {return !data.is_competitor});
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { MeService } from '../core/me/me.service';


@Injectable()
export class MentorsPartOfTeamGuardService implements CanActivate {
  constructor(private _router: Router, private _meService: MeService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._meService.getSeasonMeInfo()
                          .map(data => {
                            let result = !!data.team;
                            if (!result) this._router.navigate(['mentors/public']);

                            return result;
                          });
  }
}

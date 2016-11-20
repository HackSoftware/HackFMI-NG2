import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Me } from '../core/core.models';
import { MeService } from '../core/me.service';


@Injectable()
export class LeaderGuardService implements CanActivate {
  constructor(private _router: Router, private _meService: MeService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._meService.getSeasonMeInfo()
                          .map(
                            data => {return data.competitor_info.id == data.team.leader_id},
                            err => console.log(err))
  }
}

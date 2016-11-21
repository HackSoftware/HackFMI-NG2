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
                            data => this._handleIsLeader(data),
                            err => console.log(err))
  }

  private _handleIsLeader(meData:Me):boolean {
    if (!meData.team) return false;

    return meData.competitor_info.id == meData.team.leader_id;
  }
}

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

import { TeamsService } from './teams.service';


@Injectable()
export class PublicTeamsListResolver implements Resolve<any> {
  constructor(private _teamsService:TeamsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this._teamsService.getPublicTeams();
  }
}

@Injectable()
export class PrivateTeamsListResolver implements Resolve<any> {
  constructor(private _teamsService:TeamsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this._teamsService.getPrivateTeams();
  }
}

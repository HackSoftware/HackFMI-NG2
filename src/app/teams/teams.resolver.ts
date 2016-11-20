import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

import { TeamsService } from './teams.service';
import { PublicTeam, PrivateTeam,  } from './teams.models';


@Injectable()
export class PublicTeamsListResolver implements Resolve<PublicTeam[]> {
  constructor(private _teamsService:TeamsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this._teamsService.getPublicTeams();
  }
}


@Injectable()
export class PrivateTeamsListResolver implements Resolve<PrivateTeam[]> {
  constructor(private _teamsService:TeamsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this._teamsService.getPrivateTeams();
  }
}


@Injectable()
export class TeamDetailsResolver implements Resolve<PrivateTeam> {
  constructor(private _teamsService:TeamsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    var id = route.params['id'];

    return this._teamsService.getTeamDetails(id);
  }
}

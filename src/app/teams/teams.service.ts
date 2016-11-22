import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../auth/authHttp.service';
import { ApiUrlsService } from '../core/apiUrls.service';
import { HandleHttpService } from '../core/handleHttp.service';
import { DefaultHttpService } from '../core/defaultHttp.service';

import { PublicTeam, PrivateTeam } from './teams.models';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class TeamsService {
  constructor(private _authHttp: AuthHttp,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService,
              private _defaultHttpService: DefaultHttpService) { }

  getPublicTeams():Observable<PublicTeam[]> {
    return this._defaultHttpService.get(this._apiUrlsService.teamsPublicListUrl)
                                   .map(res => res.json())
                                   .catch(err => this._handleHttp.handleError(err))
  }

  getPrivateTeams():Observable<PrivateTeam[]> {
    return this._authHttp.get(this._apiUrlsService.teamsUrl)
                         .map(res => res.json())
                         .catch(err => this._handleHttp.handleError(err))
  }

  getTeamDetails(teamId:number):Observable<PrivateTeam> {
    var teamDetailsUrl = this._apiUrlsService.teamsUrl + teamId + "/";

    return this._authHttp.get(teamDetailsUrl)
                         .map(res => res.json())
                         .catch(err => this._handleHttp.handleError(err))
  }

  createTeam(teamData:any): Observable<PrivateTeam> {
    return this._authHttp.post(this._apiUrlsService.teamsUrl, teamData)
                         .map(res => res.json());
  }

  editTeam(teamId:number, teamData:PrivateTeam): Observable<PrivateTeam> {
    var teamEditUrl = this._apiUrlsService.teamsUrl + teamId + "/";

    return this._authHttp.patch(teamEditUrl, teamData)
                         .map(res => res.json());
  }

  leaveTeam(teamMembershipId: number): Observable<any> {
    var teamLeaveUrl = this._apiUrlsService.teamMembershipUrl + teamMembershipId + "/";

    return this._authHttp.delete(teamLeaveUrl);
  }
}

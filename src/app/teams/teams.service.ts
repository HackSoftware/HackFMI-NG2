import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiUrlsService } from '../core/apiUrls.service';
import { HandleHttpService } from '../core/handleHttp.service';

import { PublicTeam } from './teams.models';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class TeamsService {
  constructor(private _http:Http,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService) { }

  getPublicTeams():Observable<PublicTeam> {
    return this._http.get(this._apiUrlsService.teamsPublicListUrl)
                     .map(res => res.json())
                     .catch(err => this._handleHttp.handleError(err))
  }
}

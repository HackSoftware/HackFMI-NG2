import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../../auth/auth-http.service';

import { Me } from '../core.models';
import { ApiUrlsService } from '../api-urls.service';
import { SeasonService } from '../season/season.service';
import { HandleHttpService } from '../http/handle-http.service';

import 'rxjs/add/operator/mergeMap';


@Injectable()
export class MeService {
  private _meInfo: Me = null;

  constructor(private _authHttp: AuthHttp,
              private _seasonService: SeasonService,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService) { }

  /* TODO: This is unused. Atm we always know who's the active season */
  getMeInfo():Observable<any> {
    return this._authHttp.get(this._apiUrlsService.meUrl)
                         .map(res => res.json())
                         .catch(err => this._handleHttp.handleError(err));
  }

  getSeasonMeInfo():Observable<Me> {
    if (!!this._meInfo){
      return Observable.of(this._meInfo);
    } else {
      return this._seasonService.getSeasonInfo().flatMap(
        season => {
          var seasonMeUrl = this._apiUrlsService.meUrl + season.id + "/";

          return this._authHttp.get(seasonMeUrl)
                               .map(res => {
                                 this._meInfo = <Me>res.json();
                                 return this._meInfo;
                               })
                               .catch(err => this._handleHttp.handleError(err));
      })
    }
  }

  clearCurrentMeInfo(): void {
    this._meInfo = null;
  }

  isLeader = ():boolean => {
    if (!!this._meInfo && !!this._meInfo.team){
      return this._meInfo.competitor_info.id == this._meInfo.team.leader_id;
    }

    return false;
  }
}

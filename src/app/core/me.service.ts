import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../auth/authHttp.service';
import { ApiUrlsService } from '../core/apiUrls.service';
import { HandleHttpService } from '../core/handleHttp.service';

import { Me } from './core.models';
import { SeasonService } from './season.service';

import 'rxjs/add/operator/mergeMap';


@Injectable()
export class MeService {
  private meInfo: Me = null;

  constructor(private _authHttp: AuthHttp,
              private _seasonService: SeasonService,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService) { }

  /* This is unused. Atm we always know who's the active season */
  getMeInfo():Observable<any> {
    return this._authHttp.get(this._apiUrlsService.meUrl)
                         .map(res => res.json())
                         .catch(err => this._handleHttp.handleError(err));
  }

  getSeasonMeInfo():Observable<Me> {
    if (!!this.meInfo){
      return Observable.of(this.meInfo);
    } else {
        return this._seasonService.getSeasonInfo().flatMap(
        season => {
          var seasonMeUrl = this._apiUrlsService.meUrl + season.id + "/";

          return this._authHttp.get(seasonMeUrl)
                               .map(res => {
                                 this.meInfo = <Me>res.json();
                                 return this.meInfo
                               })
                               .catch(err => this._handleHttp.handleError(err))
      })
    }
  }

  isLeader = ():boolean => {
        if (!!this.meInfo){
          return this.meInfo.competitor_info.id == this.meInfo.team.leader_id
        }
        return false
      };
}

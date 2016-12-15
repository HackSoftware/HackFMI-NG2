import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../../auth/auth-http.service';

import { MeService } from '../me/me.service';
import { ApiUrlsService } from '../api-urls.service';
import { SeasonCompetitorInfo } from '../core.models';
import { SeasonService } from '../season/season.service';
import { HandleHttpService } from '../http/handle-http.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class SeasonCompetitorInfoService {
  constructor(private _authHttp: AuthHttp,
              private _meService: MeService,
              private _seasonService: SeasonService,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService) { }

  createSeasonCompetitorInfo(seasonInfoData): Observable<SeasonCompetitorInfo> {
    return this._seasonService.getSeasonInfo().flatMap(
      seasonInfo => {
        seasonInfoData['season'] = seasonInfo.id;
        return this._meService.getSeasonMeInfo();
    }).flatMap(
      meInfo => {
        seasonInfoData['competitor'] = meInfo.competitor_info.id;
        return this._authHttp.post(this._apiUrlsService.seasonCompetitorInfoUrl, seasonInfoData)
                             .catch(err => this._handleHttp.handleError(err));
      });
  }

  editSeasonCompetitorInfo(season_competitor_info_id: number, seasonInfoData: any): Observable<SeasonCompetitorInfo> {
    let seasonCompetitorInfoEditUrl = this._apiUrlsService.seasonCompetitorInfoUrl + season_competitor_info_id + '/';
    return this._authHttp.patch(seasonCompetitorInfoEditUrl, seasonInfoData)
                         .catch(err => this._handleHttp.handleError(err));
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MeService } from '../core/me/me.service';
import { AuthHttp } from '../auth/auth-http.service';
import { ApiUrlsService } from '../core/api-urls.service';
import { HandleHttpService } from '../core/http/handle-http.service';
import { SeasonCompetitorInfoService } from '../core/season/season-competitor-info.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class OnboardingService {
  constructor(private _authHttp: AuthHttp,
              private _meService: MeService,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService,
              private _seasonCompetitorInfoService: SeasonCompetitorInfoService) { }

  onboardCompetitor(onboardData: any): Observable<any> {
    return this._authHttp.post(this._apiUrlsService.onboardUrl, onboardData)
                         .catch(err => this._handleHttp.handleError(err));
  }

  onboardSeasonCompetitor(onboardData: any, seasonOnboardData: any): Observable<any> {
    return this.onboardCompetitor(onboardData).flatMap(
      data => {
        /* TODO: Fix this in the backend. Both actions must be done in one reques in atomic transaction */
        this._meService.clearCurrentMeInfo();
        return this._seasonCompetitorInfoService.createSeasonCompetitorInfo(seasonOnboardData)
                                                .catch(err => this._handleHttp.handleError(err));
      });
  }
}

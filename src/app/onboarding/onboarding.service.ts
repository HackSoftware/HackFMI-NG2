import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../auth/authHttp.service';
import { ApiUrlsService } from '../core/apiUrls.service';
import { MeService } from '../core/me.service';
import { HandleHttpService } from '../core/handleHttp.service';
import { SeasonCompetitorInfoService } from '../core/seasonCompetitorInfo.service';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class OnboardingService {
  constructor(private _authHttp: AuthHttp,
              private _meService: MeService,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService,
              private _seasonCompetitorInfoService: SeasonCompetitorInfoService) { }

  onboardCompetitor(onboardData:any): Observable<any> {
    return this._authHttp.post(this._apiUrlsService.onboardUrl, onboardData)
                         .catch(err => this._handleHttp.handleError(err));
  }

  onboardSeasonCompetitor(onboardData:any, seasonOnboardData:any): Observable<any>{
    return this.onboardCompetitor(onboardData).flatMap(
      data => {
        /* TODO: Fix this in the backend. Both actions must be done in one reques in atomic transaction */
        this._meService.clearCurrentMeInfo();
        return this._seasonCompetitorInfoService.createSeasonCompetitorInfo(seasonOnboardData)
                                                .catch(err => this._handleHttp.handleError(err));
      })
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../auth/authHttp.service';
import { ApiUrlsService } from '../core/apiUrls.service';
import { HandleHttpService } from '../core/handleHttp.service';
import { SeasonCompetitorInfoService } from '../core/seasonCompetitorInfo.service';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class OnboardingService {
  constructor(private _authHttp: AuthHttp,
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
        return this._seasonCompetitorInfoService.postSeasonCompetitorInfo(seasonOnboardData)
                                                .catch(err => this._handleHttp.handleError(err));
      })
  }
}

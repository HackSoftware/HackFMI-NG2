import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../auth/authHttp.service';
import { ApiUrlsService } from '../core/apiUrls.service';

import 'rxjs/add/operator/map'


@Injectable()
export class OnboardingService {
  constructor(private _authHttp: AuthHttp,
              private _apiUrlsService: ApiUrlsService) { }

  onboardCompetitor(onboardData:any): Observable<any> {
    return this._authHttp.post(this._apiUrlsService.onboardUrl, onboardData);
  }
}

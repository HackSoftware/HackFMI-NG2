import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiUrlsService } from '../core/apiUrls.service';
import { AuthHttp } from '../auth/authHttp.service';
import { HandleHttpService } from '../core/handleHttp.service';
import { OnboardingGuardService } from '../guard/onboarding-guard.service';

import { Skill } from './onboarding.models';

import 'rxjs/add/operator/map'


@Injectable()
export class OnboardingService {

  constructor(private _http:Http,
              private _router: Router,
              private _authHttp: AuthHttp,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService,
              private _onboardingGuardService: OnboardingGuardService) { }

  getSkills(): Observable<any> {
    return this._http.get(this._apiUrlsService.skillsUrl)
                     .map(response => <Skill[]>response.json())
                     .catch(err => this._handleHttp.handleError(err));
  }

  onboardCompetitor(onboardData:any): void {
    this._authHttp.post(this._apiUrlsService.onboardUrl, onboardData)
                  .subscribe(
                    data => this._handleSuccessfulOnboarding());
  }

  private _handleSuccessfulOnboarding() {
    if (this._onboardingGuardService.redirectUrl) {
      this._router.navigate([this._onboardingGuardService.redirectUrl]);
    } else {
      this._router.navigate(['home']);
    }
  }
}

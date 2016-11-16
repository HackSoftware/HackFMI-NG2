import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiUrlsService } from '../core/apiUrls.service';
import { HandleHttpService } from '../core/handleHttp.service';

import { Skill } from './onboarding.models';

import 'rxjs/add/operator/map'


@Injectable()
export class OnboardingService {

  constructor(private _http:Http,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService) { }

  getSkills(): Observable<any> {
    return this._http.get(this._apiUrlsService.skillsUrl)
                     .map(response => <Skill[]>response.json())
                     .catch(err => this._handleHttp.handleError(err));
  }

  onboardCompetitor(onboardData): Observable<any> {
    return this._http.post(this._apiUrlsService.onboardUrl, onboardData)
                     .map(res => res.json())
                     .catch(err => this._handleHttp.handleError(err));
  }
}

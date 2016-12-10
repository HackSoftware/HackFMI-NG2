import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Skill } from './core.models';
import { ApiUrlsService } from './api-urls.service';
import { HandleHttpService } from './handleHttp.service';

import { DefaultHttpService } from './default-http.service';

import 'rxjs/add/operator/map'


@Injectable()
export class SkillsService {
  constructor(private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService,
              private _defaultHttpService:DefaultHttpService) { }

  getSkills(): Observable<Skill[]> {
    return this._defaultHttpService.get(this._apiUrlsService.skillsUrl)
                                   .map(response => <Skill[]>response.json())
                                   .catch(err => this._handleHttp.handleError(err));
  }
}

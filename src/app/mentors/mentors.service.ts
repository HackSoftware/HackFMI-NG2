import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiUrlsService } from '../core/apiUrls.service';
import { HandleHttpService } from '../core/handleHttp.service';
import { DefaultHttpService } from '../core/defaultHttp.service';

import { Mentor } from './mentors.models';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class MentorsService {
  constructor(private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService,
              private _defaultHttpService: DefaultHttpService) { }

  getMentorsListInfo():Observable<Mentor[]> {
    return this._defaultHttpService.get(this._apiUrlsService.membersPublicListUrl)
                                   .map(res => <Mentor[]>res.json())
                                   .catch(err => this._handleHttp.handleError(err))
  }
}

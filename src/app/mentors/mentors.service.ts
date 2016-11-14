import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Mentor } from './mentors.models';
import { AuthHttp } from '../auth/authHttp.service';
import { ApiUrlsService } from '../core/apiUrls.service';
import { HandleHttpService } from '../core/handleHttp.service';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class MentorsService {
  constructor(private _http: Http,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService) { }

  getMentorsListInfo():Observable<Mentor[]> {
    return this._http.get(this._apiUrlsService.membersPublicListUrl)
                          .map(res => res.json())
                          .catch(err => this._handleHttp.handleError(err))
  }
}

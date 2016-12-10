import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../auth/auth-http.service';
import { ApiUrlsService } from '../core/api-urls.service';
import { HandleHttpService } from '../core/handle-http.service';

import { CompetitorInfoForList } from './competitors.models';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class CompetitorsService {
  constructor(private _authHttp: AuthHttp,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService) { }

  getCompetitorsList():Observable<CompetitorInfoForList[]> {
    return this._authHttp.get(this._apiUrlsService.competitorsUrl)
                         .map(res => <CompetitorInfoForList[]>res.json())
                         .catch(err => this._handleHttp.handleError(err));
  }
}

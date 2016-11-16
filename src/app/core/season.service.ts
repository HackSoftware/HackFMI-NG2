import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiUrlsService } from '../core/apiUrls.service';
import { HandleHttpService } from '../core/handleHttp.service';

import { Season } from './core.models';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class SeasonService {
  constructor(private _http:Http,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService) { }

  getSeasonInfo():Observable<Season> {
    return this._http.get(this._apiUrlsService.currentSeasonDetailUrl)
                     .map(res => res.json())
                     .catch(err => this._handleHttp.handleError(err))
  }
}

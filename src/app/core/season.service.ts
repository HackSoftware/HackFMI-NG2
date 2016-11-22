import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiUrlsService } from '../core/apiUrls.service';
import { HandleHttpService } from '../core/handleHttp.service';
import { DefaultHttpService } from '../core/defaultHttp.service';

import { Season } from './core.models';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class SeasonService {
  constructor(private _handleHttp: HandleHttpService,
              private _defaultHttp:DefaultHttpService,
              private _apiUrlsService: ApiUrlsService) { }

  getSeasonInfo():Observable<Season> {
    return this._defaultHttp.get(this._apiUrlsService.currentSeasonDetailUrl)
                            .map(res => res.json())
                            .catch(err => this._handleHttp.handleError(err))
  }
}

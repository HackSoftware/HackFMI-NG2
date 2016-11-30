import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiUrlsService } from '../core/apiUrls.service';
import { HandleHttpService } from '../core/handleHttp.service';
import { DefaultHttpService } from '../core/defaultHttp.service';

import { Season } from './core.models';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class SeasonService {
  constructor(private _handleHttp: HandleHttpService,
              private _defaultHttp:DefaultHttpService,
              private _apiUrlsService: ApiUrlsService) { }

  seasonInfo:Season = null;

  getSeasonInfo():Observable<Season> {
    if (!!this.seasonInfo){
        return Observable.of(this.seasonInfo);
    } else {
        return this._defaultHttp.get(this._apiUrlsService.currentSeasonDetailUrl)
                                .map(res => {
                                  this.seasonInfo = <Season>res.json();
                                  return this.seasonInfo})
                                .catch(err => this._handleHttp.handleError(err));
    }
  }
}

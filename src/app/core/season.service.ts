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
  private _seasonInfo: Season = null;

  constructor(private _handleHttp: HandleHttpService,
              private _defaultHttp:DefaultHttpService,
              private _apiUrlsService: ApiUrlsService) { }

  getSeasonInfo(): Observable<Season> {
    if (!!this._seasonInfo) {
        return Observable.of(this._seasonInfo);
    } else {
        return this._defaultHttp.get(this._apiUrlsService.currentSeasonDetailUrl)
                                .map(res => {
                                    this._seasonInfo = <Season>res.json();
                                    return this._seasonInfo
                                    })
                                .catch(err => this._handleHttp.handleError(err));
      }
  }

  clearCurrentSeasonInfo(): void {
    this._seasonInfo = null;
  }
}

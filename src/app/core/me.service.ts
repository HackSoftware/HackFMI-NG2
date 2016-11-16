import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../auth/authHttp.service';
import { ApiUrlsService } from '../core/apiUrls.service';

import { SeasonService } from './season.service';

import 'rxjs/add/operator/mergeMap';


@Injectable()
export class MeService {
  constructor(private _http: Http,
              private _authHttp: AuthHttp,
              private _seasonService: SeasonService,
              private _apiUrlsService: ApiUrlsService) { }

  getMeInfo():Observable<any> {
    return this._authHttp.get(this._apiUrlsService.meUrl)
                         .map(res => res.json());
  }

  getSeasonMeInfo():Observable<any> {
    return this._seasonService.getSeasonInfo().flatMap(
      season => {
        var seasonMeUrl = this._apiUrlsService.meUrl + season.id + "/";
        return this._authHttp.get(seasonMeUrl).map(res => res.json());
      })
  }
}

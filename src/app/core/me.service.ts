import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../auth/authHttp.service';
import { ApiUrlsService } from '../core/apiUrls.service';
import { HandleHttpService } from '../core/handleHttp.service';

import { Me } from './core.models';
import { SeasonService } from './season.service';

import 'rxjs/add/operator/mergeMap';


@Injectable()
export class MeService {
  constructor(private _authHttp: AuthHttp,
              private _seasonService: SeasonService,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService) { }

  /* This is unused. Atm we always know who's the active season */
  getMeInfo():Observable<any> {
    return this._authHttp.get(this._apiUrlsService.meUrl)
                         .map(res => res.json())
                         .catch(err => this._handleHttp.handleError(err));
  }

  getSeasonMeInfo():Observable<Me> {
    return this._seasonService.getSeasonInfo().flatMap(
      season => {
        var seasonMeUrl = this._apiUrlsService.meUrl + season.id + "/";

        return this._authHttp.get(seasonMeUrl)
                             .map(res => <Me>res.json())
                             .catch(err => this._handleHttp.handleError(err));
      })
  }
}

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiUrlsService } from '../core/apiUrls.service';

import { Season } from './home.models';

import 'rxjs/add/operator/map'


@Injectable()
export class HomeService {
  constructor(private _http:Http, private _apiUrlsService: ApiUrlsService) { }

  getSeasonInfo():Observable<Season> {
    return this._http.get(this._apiUrlsService.currentSeasonDetailUrl)
                     .map(res => res.json())
  }
}

import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';

import { environment } from '../../environments/environment';


@Injectable()
export class UrlParamsService {
  private _params: URLSearchParams = new URLSearchParams();

  constructor() { }

  get params(): URLSearchParams {return this._params;}

  setDefaultParams(params?: URLSearchParams):void {
    /* Use provided params if any */
    this._params = params ? params : this._params;
    var defaultParams = environment.defaultUrlQueryParams;
    /* This overrides any existing keys in `params` */
    Object.keys(defaultParams).forEach((key) => this._setParam(key, defaultParams[key]));
  }

  private _setParam(key:string, value:string):void {
    this._params.set(key, value);
  }
}

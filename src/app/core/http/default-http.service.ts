import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Http, Response } from '@angular/http';

import { UrlParamsService } from '../url-params.service';


@Injectable()
export class DefaultHttpService {
  constructor(private _http: Http,
              private _urlParamsService: UrlParamsService) {}

  private createDefaultOptions(requestOptions?: RequestOptions) {
    let options = requestOptions ? requestOptions : new RequestOptions();
    let initialUrlParams = options.search;
    this._urlParamsService.setDefaultParams(initialUrlParams);
    let params = this._urlParamsService.params;
    options.search = params;

    return options;
  }

  get(url: string, options?: RequestOptions): Observable<Response> {
    return this._http.get(url, this.createDefaultOptions(options));
  }

  post(url: string, body: any, options?: RequestOptions): Observable<Response> {
    return this._http.post(url, body, this.createDefaultOptions(options));
  }

  patch(url: string, body: any, options?: RequestOptions): Observable<Response> {
    return this._http.patch(url, body, this.createDefaultOptions(options));
  }

  delete(url: string, options?: RequestOptions): Observable<Response> {
    return this._http.delete(url, this.createDefaultOptions(options));
  }
}

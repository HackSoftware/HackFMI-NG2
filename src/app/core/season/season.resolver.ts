import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

import { Season } from '../core.models';
import { SeasonService } from './season.service';


@Injectable()
export class SeasonInfoResolver implements Resolve<Season> {
  constructor(private _seasonService: SeasonService) {}

  resolve(route: ActivatedRouteSnapshot) {
      return this._seasonService.getSeasonInfo();
  }
}

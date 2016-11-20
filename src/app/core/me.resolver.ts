import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

import { MeService } from './me.service';


@Injectable()
export class MeSeasonResolver implements Resolve<any> {
  constructor(private _meService:MeService) {}

  resolve(route: ActivatedRouteSnapshot) {
      return this._meService.getSeasonMeInfo();
  }
}

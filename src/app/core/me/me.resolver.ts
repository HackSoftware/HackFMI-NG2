import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

import { Me } from '../core.models';
import { MeService } from './me.service';


@Injectable()
export class MeSeasonResolver implements Resolve<Me> {
  constructor(private _meService: MeService) {}

  resolve(route: ActivatedRouteSnapshot) {
      return this._meService.getSeasonMeInfo();
  }
}

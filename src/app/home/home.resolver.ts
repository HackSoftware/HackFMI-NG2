import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

import { SeasonService } from '../core/season.service';


@Injectable()
export class SeasonDetailsResolver implements Resolve<any> {
    constructor(private _seasonService:SeasonService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this._seasonService.getSeasonInfo();
    }
}

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

import { Season } from '../core/core.models';
import { SeasonService } from '../core/season.service';


/* TODO: Move this to the `core` module */
@Injectable()
export class SeasonDetailsResolver implements Resolve<Season> {
    constructor(private _seasonService:SeasonService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this._seasonService.getSeasonInfo();
    }
}

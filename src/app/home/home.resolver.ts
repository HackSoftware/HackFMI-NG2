import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

import { HomeService } from './home.service';


@Injectable()
export class SeasonDetailsResolver implements Resolve<any> {
    constructor(private _homeService:HomeService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this._homeService.getSeasonInfo();
    }
}

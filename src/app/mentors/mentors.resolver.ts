import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

import { MentorsService } from './mentors.service';


@Injectable()
export class MentorsListResolver implements Resolve<any> {
    constructor(private _mentorsService:MentorsService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this._mentorsService.getMentorsListInfo();
    }
}

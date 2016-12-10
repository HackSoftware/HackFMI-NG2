import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

import { Mentor } from './mentors.models';
import { MentorsService } from './mentors.service';


@Injectable()
export class MentorsListResolver implements Resolve<Mentor[]> {
    constructor(private _mentorsService: MentorsService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this._mentorsService.getMentorsListInfo();
    }
}


@Injectable()
export class MentorsForTeamResolver implements Resolve<Mentor[]> {
    constructor(private _mentorsService: MentorsService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this._mentorsService.getMentorsForTeam();
    }
}



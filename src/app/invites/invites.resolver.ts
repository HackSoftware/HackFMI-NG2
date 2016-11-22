import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

import { Invite } from './invites.models';
import { InvitesService } from './invites.service';


@Injectable()
export class InvitesListResolver implements Resolve<Invite[]> {
    constructor(private _invitesService:InvitesService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this._invitesService.getInvites();
    }
}

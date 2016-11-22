import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../auth/authHttp.service';
import { ApiUrlsService } from '../core/apiUrls.service';
import { HandleHttpService } from '../core/handleHttp.service';

import { Invite } from './invites.models';

import 'rxjs/add/operator/map'


@Injectable()
export class InvitesService {
  constructor(private _authHttp: AuthHttp,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService) { }

  getInvites(): Observable<Invite[]> {
    return this._authHttp.get(this._apiUrlsService.invitationUrl)
                         .map(response => <Invite[]>response.json())
                         .catch(err => this._handleHttp.handleError(err));
  }

  acceptInvitation(invitationId: number): Observable<any> {
    var acceptInvitationUrl = this._apiUrlsService.invitationUrl + invitationId + "/accept/";

    return this._authHttp.post(acceptInvitationUrl, {});
  }

  rejectInvitation(invitationId: number): Observable<any> {
    var rejectInvitationUrl = this._apiUrlsService.invitationUrl + invitationId + "/";

    return this._authHttp.delete(rejectInvitationUrl);
  }
}

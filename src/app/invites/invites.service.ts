import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth/auth.service';
import { AuthHttp } from '../auth/auth-http.service';
import { InvitationMessage } from '../core/core.models';
import { ApiUrlsService } from '../core/api-urls.service';
import { WebSocketService } from '../core/websocket.service';
import { HandleHttpService } from '../core/http/handle-http.service';

import { Invite } from './invites.models';

import 'rxjs/add/operator/map';


@Injectable()
export class InvitesService {
  wsOpened: EventEmitter<any>;
  inviteEmitter: EventEmitter<any>;
  socket: Observable<InvitationMessage>;

  constructor(private _authHttp: AuthHttp,
              private _authService: AuthService,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService,
              private _websocketService: WebSocketService) {
    this.wsOpened = new EventEmitter();
    this.inviteEmitter = new EventEmitter();
    if (_authService.isLogged()) {
      this._openWSConnection();
    }
    _authService.userLoggedIn.subscribe(data => this._openWSConnection());
  }

  getInvites(): Observable<Invite[]> {
    return this._authHttp.get(this._apiUrlsService.invitationUrl)
                         .map(response => <Invite[]>response.json())
                         .catch(err => this._handleHttp.handleError(err));
  }

  acceptInvitation(invitationId: number): Observable<any> {
    let acceptInvitationUrl = this._apiUrlsService.invitationUrl + invitationId + '/accept/';

    return this._authHttp.post(acceptInvitationUrl, {})
                         .catch(err => this._handleHttp.handleError(err));
  }

  rejectInvitation(invitationId: number): Observable<any> {
    let rejectInvitationUrl = this._apiUrlsService.invitationUrl + invitationId + '/';

    return this._authHttp.delete(rejectInvitationUrl)
                         .catch(err => this._handleHttp.handleError(err));
  }

  inviteMember(inviteData: any): Observable<any> {
    return this._authHttp.post(this._apiUrlsService.invitationUrl, inviteData)
                         .catch(err => this._handleHttp.handleError(err));
  }

  private _openWSConnection(): void {
    this.socket = this._websocketService.connect(this._apiUrlsService.wsUrl)
                                        .map((res: MessageEvent): InvitationMessage => JSON.parse(res.data));
    this.wsOpened.emit();
  }

  clearSocket(): void {
    this.socket = null;
  }
}

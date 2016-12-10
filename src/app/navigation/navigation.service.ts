import { Injectable, Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth/auth.service';
import { InvitationMessage } from '../core/core.models';
import { ApiUrlsService } from '../core/api-urls.service';
import { WebSocketService } from '../core/websocket.service';


@Injectable()
export class NavigationService {
  public socket: Observable<InvitationMessage>;
  public wsOpened: EventEmitter<any>;

  constructor(private _authService: AuthService,
              private _apiUrlsService: ApiUrlsService,
              private _websocketService: WebSocketService) {
    this.wsOpened = new EventEmitter();
    if (_authService.isLogged()) this._openWSConnection();
    _authService.userLoggedIn.subscribe(data => this._openWSConnection());
  }

  private _openWSConnection(): void {
    this.socket = this._websocketService.connect(this._apiUrlsService.invitationWebsocketUrl)
                                        .map((res: MessageEvent): InvitationMessage => JSON.parse(res.data));
    this.wsOpened.emit();
  }

  clearSocket(): void {
    this.socket = null;
  }
}

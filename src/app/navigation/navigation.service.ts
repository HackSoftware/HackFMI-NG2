import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { ApiUrlsService } from '../core/apiUrls.service';
import { WebSocketService } from '../core/websocket.service';
import { InvitationMessage } from '../core/core.models';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class NavigationService {
  _socket: Observable<InvitationMessage> = null;

  constructor(private _authService: AuthService,
              private _apiUrlsService: ApiUrlsService,
              private _websocketService: WebSocketService) { 

    if (!!this._authService.currentUser){
      this._socket = this.openWebsocketConnection();
    }
  }

  openWebsocketConnection(): Observable<InvitationMessage> {
    if (!!this._socket) {
      return this._socket;
    } else {
      return this._websocketService.connect(this._apiUrlsService.invitationWebsocketUrl)
                                   .map((res: MessageEvent): InvitationMessage => JSON.parse(res.data));
    }
  }

  clearWebsocket(): void {
    this._socket = null;
  }
}

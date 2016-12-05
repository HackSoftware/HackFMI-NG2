import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';

import { InvitationMessage } from '../core/core.models';
import { ApiUrlsService } from '../core/apiUrls.service';
import { WebSocketService } from '../core/websocket.service';


@Injectable()
export class NavigationService {
  socket: Observable<InvitationMessage>;

  constructor(private _apiUrlsService: ApiUrlsService,
              private _websocketService: WebSocketService) {
  /* TODO: Open only if logged */
    this.socket = _websocketService.connect(this._apiUrlsService.invitationWebsocketUrl)
                                   .map((res: MessageEvent): InvitationMessage => JSON.parse(res.data))
  }
}

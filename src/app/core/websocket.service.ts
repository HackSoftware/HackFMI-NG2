import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../auth/auth.service';

import 'rxjs/add/operator/share';

@Injectable()
export class WebSocketService {
  private _ws: WebSocket;
  private _subject: Subject<MessageEvent>;

  constructor(private _authService: AuthService) {
    _authService.userLoggedOut.subscribe(data => this.close());
  }

  public connect(url): Subject<MessageEvent> {
    if (!this._subject) {
      this._subject = this._createSubject(url);
    }

    return this._subject;
  }

  private close(): void {
    if (!!this._ws) {
      this._ws.close();
      this._ws = null;
      this._subject = null;
    }
  }

  private _createSubject(url): Subject<MessageEvent> {
    let ws = new WebSocket(url);
    let dataToSend = {'token': this._authService.token};

    ws.onopen = function() {
      ws.send(JSON.stringify(dataToSend));
    };

    this._ws = ws;

    let observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
        this._ws.onmessage = obs.next.bind(obs);
        this._ws.onerror = obs.error.bind(obs);
        this._ws.onclose = obs.complete.bind(obs);

        return this._ws.close.bind(this._ws);
      }).share();

    let observer = {
      next: (data: Object) => {
        if (this._ws.readyState === WebSocket.OPEN) {
          this._ws.send(JSON.stringify(data));
        }
      }
    };

    return Subject.create(observer, observable);
  }
}

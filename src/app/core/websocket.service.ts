import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class WebSocketService {
  private _subject: Subject<MessageEvent>;

  public connect(url): Subject<MessageEvent> {
    if (!this._subject) {
      this._subject = this._createSubject(url);
    }
    return this._subject;
  }

  private _createSubject(url): Subject<MessageEvent> {
    // TODO: Add Authorization
    let ws = new WebSocket(url);

    let observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);

        return ws.close.bind(ws);
      })

    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    }

    return Subject.create(observer, observable);
  }
}

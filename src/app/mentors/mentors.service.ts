import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../auth/authHttp.service';
import { environment } from '../../environments/environment';


@Injectable()
export class MentorsService {
  private _membersUrl = environment.apiUrl + 'me/';

  constructor(private _authHttp: AuthHttp) { }

  getMentors():Observable<any> {
    return this._authHttp.get(this._membersUrl)
                          .map(res => res.json())
  }
}

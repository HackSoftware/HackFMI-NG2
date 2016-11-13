import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../auth/authHttp.service';


@Injectable()
export class MentorsService {

  constructor(private _authHttp: AuthHttp) { }

  getMentors():Observable<any> {
    var url = 'https://staging.hackbulgaria.com/hackfmi/api/jwt-test/'
    return this._authHttp.get(url)
                          .map(res => res.json())
  }

}

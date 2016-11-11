import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Skill } from './onboarding.models';

import 'rxjs/add/operator/map'


@Injectable()
export class OnboardingService {

  constructor(private _http:Http) { }

  getSkills(): Observable<any> {
    // TODO: Send request to the api. Authenticate yourself!
    return this._http.get('app/onboarding/skills.json').map(response => <Skill[]>response.json());
  }

}

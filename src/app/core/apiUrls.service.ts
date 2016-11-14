import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';


@Injectable()
export class ApiUrlsService {
  loginUrl = environment.apiUrl + 'jwt-login/';             // Public
  currentSeasonDetailUrl = environment.apiUrl + 'season/';  // Public
  membersPublicListUrl = environment.apiUrl + 'me/';        // Public

  constructor() { }
}

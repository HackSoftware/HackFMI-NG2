import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';


@Injectable()
export class ApiUrlsService {
  loginUrl = environment.apiUrl + 'jwt-login/';
  membersPublicListUrl = environment.apiUrl + 'me/';

  constructor() { }
}

import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';


@Injectable()
export class ApiUrlsService {
  // TODO: Refactor this.
  resiterUrl = environment.domain + "register/?origin=hackfmi"

  loginUrl = environment.apiUrl + 'jwt-login/';                // Public
  currentSeasonDetailUrl = environment.apiUrl + 'season/';     // Public
  skillsUrl = environment.apiUrl + 'skills/';                  // Public
  membersPublicListUrl = environment.apiUrl + 'mentors/';      // Public
  teamsPublicListUrl = environment.apiUrl + 'public-teams/';   // Public
  meUrl = environment.apiUrl + 'me/';                          // Authorization: JWT
  onboardUrl = environment.apiUrl + 'onboard-competitor/';     // Authorization: JWT
  teamsUrl = environment.apiUrl + 'teams/';                    // Authorization: JWT
  teamMembershipUrl = environment.apiUrl + 'team-membership/'  // Authorization: JWT

  constructor() { }
}

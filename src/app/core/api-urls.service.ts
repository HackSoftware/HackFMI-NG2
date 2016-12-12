import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

const API = environment.protocol + '://' + environment.domain + environment.apiBaseUrl;


@Injectable()
export class ApiUrlsService {
  skillsUrl = API + 'skills/';                               // Public
  loginUrl = API + 'jwt-login/';                             // Public
  membersPublicListUrl = API + 'mentors/';                   // Public
  currentSeasonDetailUrl = API + 'season/';                  // Public
  teamsPublicListUrl = API + 'public-teams/';                // Public
  meUrl = API + 'me/';                                       // Authorization: JWT
  teamsUrl = API + 'teams/';                                 // Authorization: JWT
  logoutUrl = API + 'jwt-logout/';                           // Authorization: JWT
  invitationUrl = API + 'invitation/'                        // Authorization: JWT
  competitorsUrl = API + 'competitors/'                      // Authorization: JWT
  teamMentorsUrl = API + 'team-mentors/'                     // Authorization: JWT
  onboardUrl = API + 'onboard-competitor/';                  // Authorization: JWT
  teamMembershipUrl = API + 'team-membership/'               // Authorization: JWT
  teamMentorshipUrl = API + 'team-mentorship/'               // Authorization: JWT
  seasonCompetitorInfoUrl = API + 'season-competitor-info/'  // Authorization: JWT

  wsUrl = environment.ws + '://' + environment.domain + 'ws/invitations';
  registerUrl = environment.protocol + '://' + environment.domain + 'register/?origin=hackfmi'

  constructor() { }
}

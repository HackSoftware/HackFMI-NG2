import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../auth/authHttp.service';
import { ApiUrlsService } from '../core/apiUrls.service';
import { HandleHttpService } from '../core/handleHttp.service';
import { DefaultHttpService } from '../core/defaultHttp.service';

import { Mentor } from './mentors.models';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class MentorsService {
  constructor(private _authHttp: AuthHttp,
              private _handleHttp: HandleHttpService,
              private _apiUrlsService: ApiUrlsService,
              private _defaultHttpService: DefaultHttpService) { }

  getMentorsListInfo():Observable<Mentor[]> {
    return this._defaultHttpService.get(this._apiUrlsService.membersPublicListUrl)
                                   .map(res => <Mentor[]>res.json())
                                   .catch(err => this._handleHttp.handleError(err))
  }

  addMentor(data: any): Observable<any> {
    return this._authHttp.post(this._apiUrlsService.teamMentorshipUrl, data)
                         .catch(err => this._handleHttp.handleError(err));
  }

  removeMentor(mentor: Mentor): Observable<any> {
    let mentorDeleteUrl = this._apiUrlsService.teamMentorshipUrl + mentor.id + '/';

    return this._authHttp.delete(mentorDeleteUrl)
                         .catch(err => this._handleHttp.handleError(err));
  }
}

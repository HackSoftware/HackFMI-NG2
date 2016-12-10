import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { MeService } from '../../core/me.service';
import { AuthService } from '../../auth/auth.service';

import { Mentor } from '../mentors.models';
import { MentorsService } from '../mentors.service';

@Component({
  selector: 'app-private-mentors',
  templateUrl: './private.mentors.component.html',
  styleUrls: ['../mentors.component.css']
})
export class PrivateMentorsComponent implements OnInit {
  mentors: Mentor[];

  constructor(private _meService: MeService,
              private _route: ActivatedRoute,
              private _authService: AuthService,
              private _toastService: ToastsManager,
              private _mentorsService: MentorsService) { }

  ngOnInit() {this._route.data.subscribe((data: {mentors:Mentor[]}) => this.mentors = data.mentors);}

  addMentor (mentor: Mentor) {
    let data = {'mentor': mentor.id};

    this._mentorsService.addMentor(data)
                        .subscribe(data => this._toastService.info(mentor.name + ' was added to your team.'));
  }

  removeMentor (mentor: Mentor) {
    this._mentorsService.removeMentor(mentor)
                        .subscribe(data => this._toastService.info(mentor.name + ' was removed from your team.'));
  }

  isLogged = this._authService.isLogged;
  isLeader = this._meService.isLeader;
}

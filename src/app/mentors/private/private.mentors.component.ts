import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef, } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Season } from '../../core/core.models';
import { MeService } from '../../core/me/me.service';
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
  mentorsForTeam: number[];
  seasonInfo: Season;

  constructor(private _meService: MeService,
              private _route: ActivatedRoute,
              private _cdRef: ChangeDetectorRef,
              private _authService: AuthService,
              private _toastService: ToastsManager,
              private _mentorsService: MentorsService) { }

  ngOnInit() {
    this._route.data.subscribe((data: {mentors:Mentor[]}) => this.mentors = data.mentors);
    this._route.data.subscribe((data: {mentorsForTeam:number[]}) => this.mentorsForTeam = data.mentorsForTeam);
    this._route.data.subscribe((data: {seasonInfo:Season}) => this.seasonInfo = data.seasonInfo);
  }

  isMentorSelected(mentor) :boolean {
    return this.mentorsForTeam.indexOf(mentor.id) > -1;
  }

  selectedMentors() :number {
    return this.mentorsForTeam.length;
  }

  addMentor (mentor: Mentor) {
    let data = {'mentor': mentor.id};

    this._mentorsService.addMentor(data)
                        .subscribe(data => this._handleSuccessfulMentorAddition(mentor));
  }

  removeMentor (mentor: Mentor) {
    this._mentorsService.removeMentor(mentor)
                        .subscribe(data => this._handleSuccessfulMentorRemoval(mentor));
  }
  private _handleSuccessfulMentorAddition(mentor: Mentor) {
    this._toastService.info(mentor.name + ' was added to your team.');
    this.mentorsForTeam.push(mentor.id);
  }

  private _handleSuccessfulMentorRemoval(mentor: Mentor) {
    this._toastService.info(mentor.name + ' was removed from your team.');
    let index = this.mentorsForTeam.indexOf(mentor.id);
    this.mentorsForTeam.splice(index, 1);
  }

  isLogged = this._authService.isLogged;
  isLeader = this._meService.isLeader;
}

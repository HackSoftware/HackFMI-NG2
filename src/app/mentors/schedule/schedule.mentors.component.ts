import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MentorForSchedule } from '../mentors.models';

@Component({
  selector: 'app-public-mentors',
  templateUrl: './schedule.mentors.component.html',
  styleUrls: ['./schedule.mentors.component.css']
})
export class MentorsScheduleComponent implements OnInit {
  mentors: MentorForSchedule[];
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {this._route.data.subscribe((data: {mentors:MentorForSchedule[]}) => this.mentors = data.mentors);}
}

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Mentor } from '../mentors.models';


@Component({
  selector: 'app-schedule-mentors',
  templateUrl: './schedule.mentors.component.html',
  styleUrls: ['./schedule.mentors.component.css']
})
export class MentorsScheduleComponent implements OnInit {
  mentors: Mentor[];
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {this._route.data.subscribe((data: {mentors:Mentor[]}) => this.mentors = data.mentors);}
}

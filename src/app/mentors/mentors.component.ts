import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Mentor } from './mentors.models';
import { MentorsService } from './mentors.service';


@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {
  mentors: Mentor[];

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.mentors = this._route.snapshot.data['mentors'];
  }
}

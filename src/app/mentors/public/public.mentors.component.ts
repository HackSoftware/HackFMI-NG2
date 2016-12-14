import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Mentor } from '../mentors.models';


@Component({
  selector: 'app-public-mentors',
  templateUrl: './public.mentors.component.html',
  styleUrls: ['../mentors.component.css']
})
export class PublicMentorsComponent implements OnInit {
  mentors: Mentor[];

  constructor(private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() { this._route.data.subscribe((data: {mentors: Mentor[]}) => this.mentors = data.mentors); }

  showMentorsSchedule(): void {
    this._router.navigate(['mentors/schedule']);
  }
}

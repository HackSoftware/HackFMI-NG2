import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Season } from '../core/core.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  season: Season;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {this._route.data.subscribe((data: {season:Season}) => this.season = data.season);}
}

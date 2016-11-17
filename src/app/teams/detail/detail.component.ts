import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PrivateTeam } from '../teams.models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  teamDetails: PrivateTeam;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {this._route.data.subscribe((data: {teamDetails:PrivateTeam}) => this.teamDetails = data.teamDetails);}
}

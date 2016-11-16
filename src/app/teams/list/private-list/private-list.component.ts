import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { PrivateTeam } from '../../teams.models';


@Component({
  selector: 'app-private-list',
  templateUrl: './private-list.component.html',
  styleUrls: ['./private-list.component.css']
})
export class PrivateListComponent implements OnInit {
  privateTeams: PrivateTeam[];

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {this._route.data.subscribe((data: {privateTeams:PrivateTeam[]}) => this.privateTeams = data.privateTeams);}
}

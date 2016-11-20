import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Me } from '../../../core/core.models';

import { PrivateTeam } from '../../teams.models';


@Component({
  selector: 'app-private-list',
  templateUrl: './private-list.component.html',
  styleUrls: ['./private-list.component.css']
})
export class PrivateListComponent implements OnInit {
  privateTeams: PrivateTeam[];
  meDetails: Me;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.data.subscribe((data: {privateTeams:PrivateTeam[]}) => this.privateTeams = data.privateTeams);
    this._route.data.subscribe((data: {meDetails:Me}) => this.meDetails = data.meDetails);
  }

  showTeamDetails(team:PrivateTeam):void {
    this._router.navigate(['teams', team.id]);
  }

  createTeam():void {
    this._router.navigate(['teams/create']);
  }
}

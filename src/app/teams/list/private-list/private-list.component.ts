import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Me } from '../../../core/core.models';

import { PrivateTeam } from '../../teams.models';
import { SeasonCompetitorInfoService } from '../../../core/seasonCompetitorInfo.service';


@Component({
  selector: 'app-private-list',
  templateUrl: './private-list.component.html',
  styleUrls: ['./private-list.component.css']
})
export class PrivateListComponent implements OnInit {
  meDetails: Me;
  privateTeams: PrivateTeam[];

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _seasonCompetitorInfoService: SeasonCompetitorInfoService) { }

  lookingForTeamValue = false;

  ngOnInit() {
    this._route.data.subscribe((data: {meDetails:Me}) => this.meDetails = data.meDetails);
    this._route.data.subscribe((data: {privateTeams:PrivateTeam[]}) => this.privateTeams = data.privateTeams);
  }

  showTeamDetails(team:PrivateTeam):void {
    this._router.navigate(['teams', team.id]);
  }

  createTeam():void {
    this._router.navigate(['teams/create']);
  }

  lookingForTeam(): void {
    var seasonInfoData = {'looking_for_team': this.lookingForTeamValue}
    this._seasonCompetitorInfoService.postSeasonCompetitorInfo(seasonInfoData)
                                     .subscribe();
    this.lookingForTeamValue = !this.lookingForTeamValue
  }
}

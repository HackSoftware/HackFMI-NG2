import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Me } from '../../../core/core.models';
import { PrivateTeam } from '../../teams.models';
import { MeService } from '../../../core/me/me.service';
import { SeasonCompetitorInfoService } from '../../../core/season/season-competitor-info.service';


@Component({
  selector: 'app-private-list',
  templateUrl: './private-list.component.html',
  styleUrls: ['./private-list.component.css']
})
export class PrivateListComponent implements OnInit {
  meDetails: Me;
  privateTeams: PrivateTeam[];
  lookingForTeamValue: boolean;
  lookingForTeamString: string;

  constructor(private _router: Router,
              private _meService: MeService,
              private _route: ActivatedRoute,
              private _seasonCompetitorInfoService: SeasonCompetitorInfoService) { }

  ngOnInit() {
    this._route.data.subscribe((data: {meDetails:Me}) => {
      this.meDetails = data.meDetails;
      this.lookingForTeamValue = data.meDetails.looking_for_team;
      this.setLookingForTeamString();
    });
    this._route.data.subscribe((data: {privateTeams:PrivateTeam[]}) => this.privateTeams = data.privateTeams);
  }

  showTeamDetails(team:PrivateTeam):void {
    this._router.navigate(['teams', team.id]);
  }

  createTeam():void {
    this._router.navigate(['teams/create']);
  }

  changeLookingForTeamValue(): void {
    var seasonInfoData = {'looking_for_team': !this.lookingForTeamValue}
    this._seasonCompetitorInfoService.editSeasonCompetitorInfo(this.meDetails.season_competitor_info_id, seasonInfoData)
                                     .subscribe(data => this._handleSuccessfulSeasonCompetitorInfoUpdate());
  }

  private _handleSuccessfulSeasonCompetitorInfoUpdate() {
    this._meService.clearCurrentMeInfo();
    this.lookingForTeamValue = !this.lookingForTeamValue;
    this.setLookingForTeamString();
  }

  setLookingForTeamString(): void {
    if (!!this.lookingForTeamValue) {
      this.lookingForTeamString = "Да, търся си.";
    } else {
      this.lookingForTeamString = "Не, не си търся.";
    }
  }
}
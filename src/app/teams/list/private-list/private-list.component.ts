import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Me } from '../../../core/core.models';

import { PrivateTeam } from '../../teams.models';
import { MeService } from '../../../core/me.service';
import { SeasonCompetitorInfoService } from '../../../core/seasonCompetitorInfo.service';


@Component({
  selector: 'app-private-list',
  templateUrl: './private-list.component.html',
  styleUrls: ['./private-list.component.css']
})
export class PrivateListComponent implements OnInit {
  meDetails: Me;
  privateTeams: PrivateTeam[];

  constructor(private _router: Router,
              private _meService: MeService,
              private _route: ActivatedRoute,
              private _seasonCompetitorInfoService: SeasonCompetitorInfoService) { }

  lookingForTeamValue: boolean;
  lookingForTeamString: string;

  ngOnInit() {
    this._route.data.subscribe((data: {meDetails:Me}) => {
      this.meDetails = data.meDetails;
      this.lookingForTeamValue = data.meDetails.looking_for_team;
      this.setLookingForTeamString();
      console.log(this.lookingForTeamValue);
      console.log(this.lookingForTeamString)});
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
                                     .subscribe(data => {
                                        this.lookingForTeamValue = !this.lookingForTeamValue
                                        this.setLookingForTeamString();
                                     });
    this._meService.clearCurrentMeInfo();
  }

  setLookingForTeamString(): void {
    if (!!this.lookingForTeamValue) {
      this.lookingForTeamString = "Да, търся си."
    } else {
      this.lookingForTeamString = "Не, не си търся."
    }
  }
}

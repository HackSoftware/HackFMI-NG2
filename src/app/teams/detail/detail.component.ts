import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PrivateTeam } from '../teams.models';
import { TeamsService } from '../teams.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  teamDetails: PrivateTeam;
  meSeasonDetails: any;

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _teamService: TeamsService) { }

  ngOnInit() {
    this._route.data.subscribe((data: {teamDetails:PrivateTeam}) => this.teamDetails = data.teamDetails);
    this._route.data.subscribe((data: {meSeasonDetails:PrivateTeam}) => this.meSeasonDetails = data.meSeasonDetails);
  }

  competitorInTeam():boolean {
    if (!this.meSeasonDetails.team) return false;

    return this.meSeasonDetails.teams.filter((team) => team.id == this.teamDetails.id).length > 0;
  }

  leaveTeam(): void {
    if (this.competitorInTeam()) {
      this._teamService.leaveTeam()
                       .subscribe(
                         data => this._handleSuccessfulTeamLeaving(),
                         err => console.log(err));
      }
  }

  private _handleSuccessfulTeamLeaving() {
    this._router.navigate(['teams']);
  }
}

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

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _teamService: TeamsService) { }

  ngOnInit() {this._route.data.subscribe((data: {teamDetails:PrivateTeam}) => this.teamDetails = data.teamDetails);}

  leaveTeam(): void {
    this._teamService.leaveTeam()
                     .subscribe(
                       data => this._handleSuccessfulTeamLeaving(),
                       err => console.log(err));
  }

  private _handleSuccessfulTeamLeaving() {
    this._router.navigate(['teams']);
  }
}

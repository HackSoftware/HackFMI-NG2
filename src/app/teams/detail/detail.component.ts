import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Me } from '../../core/core.models';

import { PrivateTeam } from '../teams.models';
import { TeamsService } from '../teams.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  meDetails: Me;
  teamDetails: PrivateTeam;
  inviteInfo = {competitor_email: ''}

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _teamService: TeamsService) { }

  ngOnInit() {
    this._route.data.subscribe((data: {meDetails:Me}) => this.meDetails = data.meDetails);
    this._route.data.subscribe((data: {teamDetails:PrivateTeam}) => this.teamDetails = data.teamDetails);
  }

  competitorInTeam():boolean {
    if (!this.meDetails.team) return false;

    return this.meDetails.team.id == this.teamDetails.id;
  }

  isTeamLeader():boolean {
    return this.meDetails.competitor_info.id == this.teamDetails.leader_id;
  }

  inviteMember():void {
    this._teamService.inviteMember(this.inviteInfo)
                     .subscribe(
                       data => this._handleSuccessfulInvitation(data),
                       err => console.log(err));
  }

  private _handleSuccessfulInvitation(invitationData: any) {
    this.inviteInfo.competitor_email = '';
    /* TODO: Show success toastr */
  }

  updateTeam():void {
    this._router.navigate(['teams', this.teamDetails.id, 'edit']);
  }

  leaveTeam(): void {
    if (this.competitorInTeam()) {
      var teamMembershipId = this.meDetails.team_membership_id;

      this._teamService.leaveTeam(teamMembershipId)
                       .subscribe(
                         data => this._handleSuccessfulTeamLeaving(),
                         err => console.log(err));
      }
  }

  private _handleSuccessfulTeamLeaving() {
    this._router.navigate(['teams']);
  }
}

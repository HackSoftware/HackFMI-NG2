import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
              private _teamsService: TeamsService,
              private _toastService: ToastsManager) { }

  ngOnInit() {
    this._route.data.subscribe((data: {meDetails:Me}) => this.meDetails = data.meDetails);
    this._route.data.subscribe((data: {teamDetails:PrivateTeam}) => this.teamDetails = data.teamDetails);
  }

  competitorInTeam():boolean {
    if (!this.meDetails.team) return false;

    return this.meDetails.team.id == this.teamDetails.id;
  }

  isTeamLeader():boolean {return this.meDetails.competitor_info.id == this.teamDetails.leader_id;}

  updateTeam():void {this._router.navigate(['teams', this.teamDetails.id, 'edit']);}

  leaveTeam(): void {
    if (this.competitorInTeam()) {
      var teamMembershipId = this.meDetails.team_membership_id;

      this._teamsService.leaveTeam(teamMembershipId)
                        .subscribe(data => this._handleSuccessfulTeamLeaving());
      }
  }

  inviteMember():void {
    this._teamsService.inviteMember(this.inviteInfo)
                      .subscribe(data => this._handleSuccessfulInvitation(data));
  }

  private _handleSuccessfulInvitation(invitationData: any) {
    var email = this.inviteInfo.competitor_email;
    this.inviteInfo.competitor_email = '';
    this._toastService.success('Invitation email was sent to ' + email);
  }

  private _handleSuccessfulTeamLeaving() {
    this._router.navigate(['teams']);
  }
}

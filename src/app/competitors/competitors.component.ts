import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { CompetitorInfoForList } from '../core/core.models';
import { InvitesService } from '../invites/invites.service';

import { CompetitorsService } from './competitors.service';



@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.css']
})

export class CompetitorsComponent implements OnInit {
  competitors: CompetitorInfoForList[];

  constructor(private _route: ActivatedRoute,
              private _toastService: ToastsManager,
              private _invitesService: InvitesService) { }

  ngOnInit() {
      this._route.data.subscribe((data:{competitors: CompetitorInfoForList[]}) => this.competitors = data.competitors);
  }

  sendInvitation(competitorEmail: string) {
    var invitationInfo = {competitor_email: competitorEmail}
    this._invitesService.inviteMember(invitationInfo)
                        .subscribe(data => this._handleSuccessfulInvitation(competitorEmail));
  }

  private _handleSuccessfulInvitation(email: string) {
    this._toastService.success('Invitation email was sent to ' + email);
  }
}

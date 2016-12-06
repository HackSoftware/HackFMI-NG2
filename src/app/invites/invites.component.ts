import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { MeService } from '../core/me.service';

import { Invite } from './invites.models';
import { InvitesService } from './invites.service';


@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponent implements OnInit {
  invites: Invite[];

  constructor(private _router: Router,
              private _meService: MeService,
              private _route: ActivatedRoute,
              private _cdRef: ChangeDetectorRef,
              private _toastService: ToastsManager,
              private _invitesService: InvitesService) { }

  ngOnInit() {this._route.data.subscribe((data: {invites:Invite[]}) => this.invites = data.invites);}

  acceptInvitation(invitation: Invite):void {
    this._invitesService.acceptInvitation(invitation.id)
                        .subscribe(data => this._handleSuccessfulAcceptInvitation(data));
  }

  rejectInvitation(invitation: Invite):void {
    this._invitesService.rejectInvitation(invitation.id)
                        .subscribe(data => this._handleSuccessfulRejectInvitation(invitation));
  }

  private _handleSuccessfulAcceptInvitation(data: any) {
    this._meService.clearCurrentMeInfo();
    this._toastService.info('Invitation accepted!');
    this._invitesService.invitesCounter--;
    this._router.navigate(['teams']);
  }

  private _handleSuccessfulRejectInvitation(invitation: Invite) {
    this._toastService.info('Invitation rejected!');
    var index = this.invites.indexOf(invitation);
    this._invitesService.invitesCounter--;

    if (index > -1) {
      this.invites.splice(index, 1);
      this._cdRef.detectChanges();
    }
  }
}

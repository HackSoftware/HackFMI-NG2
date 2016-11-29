import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef, EventEmitter } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { MeService } from '../core/me/me.service';
import { AuthService } from '../auth/auth.service';

import { Invite } from './invites.models';
import { InvitesService } from './invites.service';


@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styleUrls: ['./invites.component.css']
})
export class InvitesComponent implements OnInit {
  socket = null;
  invites: Invite[];

  constructor(private _router: Router,
              private _meService: MeService,
              private _route: ActivatedRoute,
              private _authService:AuthService,
              private _cdRef: ChangeDetectorRef,
              private _toastService: ToastsManager,
              private _invitesService: InvitesService) {
    _invitesService.wsOpened.subscribe(data => this._startListeningToWS());
  }

  ngOnInit() {
    this._route.data.subscribe((data: {invites:Invite[]}) => this.invites = data.invites);
    if (this._authService.isLogged()) this._startListeningToWS();
  }

  acceptInvitation(invitation: Invite):void {
    this._invitesService.acceptInvitation(invitation.id)
                        .subscribe(data => this._handleSuccessfulAcceptInvitation(data));
  }

  rejectInvitation(invitation: Invite):void {
    this._invitesService.rejectInvitation(invitation.id)
                        .subscribe(data => this._handleSuccessfulRejectInvitation(invitation));
  }

  private _startListeningToWS() {
    this.socket = this._invitesService.socket.subscribe(msg => this._handleWsMessage(msg));
  }

  private _handleWsMessage(msg: any) {
    if (msg.message == "New invitation was created."){
      this._invitesService.getInvites()
                          .subscribe(data => {
                            this.invites = data;
                            this._cdRef.detectChanges();
                          });
    }
  }

  private _handleSuccessfulAcceptInvitation(data: any) {
    this._meService.clearCurrentMeInfo();
    this._toastService.info('Invitation accepted!');
    this._invitesService.inviteEmitter.emit();
    this._router.navigate(['teams']);
  }

  private _handleSuccessfulRejectInvitation(invitation: Invite) {
    this._toastService.info('Invitation rejected!');
    this._invitesService.inviteEmitter.emit();

    let index = this.invites.indexOf(invitation);

    if (index > -1) {
      this.invites.splice(index, 1);
      this._cdRef.detectChanges();
    }
  }
}

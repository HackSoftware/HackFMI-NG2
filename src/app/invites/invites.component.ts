import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

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
              private _route: ActivatedRoute,
              private _cdRef: ChangeDetectorRef,
              private _invitesService: InvitesService) { }

  ngOnInit() {this._route.data.subscribe((data: {invites:Invite[]}) => this.invites = data.invites);}

  acceptInvitation(invitation: Invite):void {
    this._invitesService.acceptInvitation(invitation.id)
                        .subscribe(
                          data => this._handleSuccessfulAcceptInvitation(data),
                          err => console.log(err));
  }

  rejectInvitation(invitation: Invite):void {
    this._invitesService.rejectInvitation(invitation.id)
                        .subscribe(
                          data => this._handleSuccessfulRejectInvitation(invitation),
                          err => console.log(err));
  }

  private _handleSuccessfulAcceptInvitation(data: any) {
    /* Show successfull toastr */
    this._router.navigate(['teams']);
  }

  private _handleSuccessfulRejectInvitation(invitation: Invite) {
    /* Show successfull toastr */
    var index = this.invites.indexOf(invitation);

    if (index > -1) {
      this.invites.splice(index, 1);
      this._cdRef.detectChanges();
    }
  }
}

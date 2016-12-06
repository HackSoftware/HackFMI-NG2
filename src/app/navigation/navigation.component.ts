import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { MeService } from '../core/me.service';
import { AuthService } from '../auth/auth.service';
import { SeasonService } from '../core/season.service';
import { LogoutService } from '../core/logout.service';
import { InvitesService } from '../invites/invites.service';

import { NavigationService } from './navigation.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  socket = null;

  constructor(private _meService: MeService,
              private _authService:AuthService,
              private _cdRef: ChangeDetectorRef,
              private _toastService: ToastsManager,
              private _seasonService: SeasonService,
              private _logoutService: LogoutService,
              private _invitesService: InvitesService,
              private _navigationService: NavigationService) { }

  ngOnInit() {
   if (this._authService.isLogged()) { 
      this.socket = this._navigationService._socket.subscribe(msg => this._handleSuccessfulSentInvitation(msg))
    }
  }

  private _handleSuccessfulSentInvitation(msg: any) {
    if (msg.message != "User added to group."){
      this._invitesService.invitesCounter++;
      this._toastService.info("You have new invite!");
    }

    this._cdRef.detectChanges();
  }

  logout(event:MouseEvent):void {
    event.preventDefault();
    this._logoutService.logout().subscribe();
    this._navigationService.clearWebsocket();
    this._authService.clearCurrentUser();
    this._meService.clearCurrentMeInfo();
    this._seasonService.clearCurrentSeasonInfo();
  }

  isLeader = this._meService.isLeader;
  isLogged = this._authService.isLogged;
}

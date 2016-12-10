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
  invitesCounter:number = 0;

  constructor(private _meService: MeService,
              private _authService:AuthService,
              private _cdRef: ChangeDetectorRef,
              private _toastService: ToastsManager,
              private _seasonService: SeasonService,
              private _logoutService: LogoutService,
              private _invitesService: InvitesService,
              private _navigationService: NavigationService) {
    _authService.userLoggedIn.subscribe(data => this._setInvitesCounter());
    _invitesService.inviteEmitter.subscribe(accepted => this._updateInvitesCounter(accepted));
    _navigationService.wsOpened.subscribe(data => this._startListeningToWS());
  }

  ngOnInit() {
    if (this._authService.isLogged()) {
      this._setInvitesCounter();
      this._startListeningToWS();
    };
  }

  private _setInvitesCounter() {
    this._invitesService.getInvites().subscribe(data => this.invitesCounter = data.length);
  }

  private _updateInvitesCounter(accepted: boolean) {
    if (accepted) {
      this.invitesCounter++;
    } else {
      this.invitesCounter--;
    }
  }

  private _startListeningToWS() {
    this.socket = this._navigationService.socket.subscribe(msg => this._handleWsMessage(msg));
  }

  private _handleWsMessage(msg: any) {
    if (msg.message == "New invitation was created."){
      this.invitesCounter++;
      this._toastService.info("You received new invitation.");
      this._cdRef.detectChanges();
    }
  }

  logout(event:MouseEvent):void {
    event.preventDefault();
    this._logoutService.logout().subscribe();
    this._authService.clearCurrentUser();
    this._meService.clearCurrentMeInfo();
    this._invitesService.clearSocket();
    this._navigationService.clearSocket();
    this._seasonService.clearCurrentSeasonInfo();
  }

  isLeader = this._meService.isLeader;
  isLogged = this._authService.isLogged;
}
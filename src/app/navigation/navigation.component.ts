import { Component, OnInit } from '@angular/core';

import { MeService } from '../core/me.service';
import { AuthService } from '../auth/auth.service';
import { SeasonService } from '../core/season.service';
import { LogoutService } from '../core/logout.service';

import { NavigationService } from './navigation.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private _meService: MeService,
              private _authService:AuthService,
              private _seasonService: SeasonService,
              private _logoutService: LogoutService,
              private _navigationService: NavigationService) {
    /* TODO: Do some action when msg is received */
    _navigationService.socket.subscribe(msg => console.log(msg));
  }

  ngOnInit() { }

  logout(event:MouseEvent):void {
    event.preventDefault();
    this._logoutService.logout().subscribe();
    this._authService.clearCurrentUser();
    this._meService.clearCurrentMeInfo();
    this._seasonService.clearCurrentSeasonInfo();
  }

  isLeader = this._meService.isLeader;
  isLogged = this._authService.isLogged;
}

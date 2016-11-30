import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { LogoutService } from '../core/logout.service';

import { NavigationService } from './navigation.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private _authService:AuthService,
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
  }

  isLogged = this._authService.isLogged;
}

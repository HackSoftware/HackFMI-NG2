import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private _authService:AuthService) { }

  ngOnInit() {
  }

  logout = this._authService.clearCurrentUser;
  isLogged = this._authService.isLogged;
}

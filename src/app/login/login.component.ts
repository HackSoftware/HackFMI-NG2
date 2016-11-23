import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';

import { AuthService } from '../auth/auth.service';

import { LoginData } from './login.models';
import { LoginService } from './login.service';

import 'rxjs/add/operator/map'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  account = {
    email: '',
    password: ''
  };

  constructor(private _router: Router,
              private _authService:AuthService,
              private _loginService: LoginService,) { }

  ngOnInit() { }

  register () {this._loginService.register();}

  login():void {
    this._loginService.login(this.account.email, this.account.password)
                      .subscribe(data => this._handleSuccessfulLogin(data));
  }

  private _handleSuccessfulLogin(data:LoginData) {
    this._authService.setCurrentUser(data);
    /* Redirect to pre-requested page */
    if (this._authService.redirectUrl) {
      this._router.navigate([this._authService.redirectUrl]);
    } else {
      this._router.navigate(['home']);
    }
  }
}

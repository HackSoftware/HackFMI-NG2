import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';

import { MeService } from '../core/me/me.service';
import { AuthService } from '../auth/auth.service';

import { LoginData } from './login.models';
import { LoginService } from './login.service';

import 'rxjs/add/operator/map';


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
              private _meService: MeService,
              private _authService: AuthService,
              private _loginService: LoginService) { }

  ngOnInit() { }

  register () {
    this._loginService.register();
  }

  login(): void {
    this._loginService.login(this.account.email, this.account.password)
                      .subscribe(data => this._handleSuccessfulLogin(data));
  }

  private _handleSuccessfulLogin(loginData: LoginData) {
    this._authService.setCurrentUser(loginData);
    this._meService.getSeasonMeInfo().subscribe(
      data => {
        /* After `meInfo` is fetched notify listeners that user is logged */
        this._authService.userLoggedIn.emit();
        if (!data.is_competitor) {
          /* Always onboard new users after login */
          this._router.navigate(['onboarding']);
        } else {
          /* Redirect to pre-requested page */
          if (this._authService.redirectUrl) {
            this._router.navigate([this._authService.redirectUrl]);
          } else {
            this._router.navigate(['home']);
          }
        }
      });
  }
}

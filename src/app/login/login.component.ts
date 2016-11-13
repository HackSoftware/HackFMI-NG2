import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
import { AuthService } from '../auth/auth.service';

import 'rxjs/add/operator/map'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:boolean = false;
  account = {
    email: '',
    password: ''
  };

  constructor(private _router: Router, private _loginService: LoginService, private _authService:AuthService) { }

  ngOnInit() { }

  login():void {
    this._loginService.login(this.account.email, this.account.password)
                      .subscribe(
                        data => this._handleSuccessfulLogin(data),
                        err => this.error = true);  // TODO: Handle error
  }

  private _handleSuccessfulLogin(data:any) {
    this._authService.setCurrentUser(data);

    /* Redirect to pre-requested page */
    if (this._authService.redirectUrl) {
      this._router.navigate([this._authService.redirectUrl]);
    } else {
      this._router.navigate(['home']);
    }
  }

}

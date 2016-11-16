import { Component, OnInit} from '@angular/core';

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

  constructor(private _loginService: LoginService) { }

  ngOnInit() { }

  register () {this._loginService.register();}
  login():void {this._loginService.login(this.account.email, this.account.password);}
}

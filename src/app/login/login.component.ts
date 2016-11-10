import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

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

  constructor(private _router: Router, private _http: Http, private _authService:AuthService) { }

  ngOnInit() {
  }

  _tryLogin(email:string, password:string):Observable<any> {
    return this._http.post('https://staging.hackbulgaria.com/hackfmi/api/jwt-login/', {"email": email, "password": password }).map(res => res.json());
  }

  login():void {
    this._tryLogin(this.account.email, this.account.password)
      .subscribe((data:any) => {
        this._authService.setCurrentUser(data);
        this._router.navigate(['home']);
      }, (err) => {
        this.error = true;
      })
  }
}

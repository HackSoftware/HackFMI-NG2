import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { AuthService } from '../../auth/auth.service';

import 'rxjs/add/observable/throw';


@Injectable()
export class HandleHttpService {
  constructor(private _router: Router,
              private _authService: AuthService,
              private _toastService: ToastsManager) { }

  handleError(response: Response | any) {
    if (response.status === 401) {
      this._authService.clearCurrentUser();
      this._router.navigate(['login']);
   }

    let errorsDict = response.json();  // Example: {"custom_errors": ["User is already competitor!"]}
    Object.keys(errorsDict).forEach((error) => this._showError(errorsDict[error]));
    return Observable.throw(response);
  }

  private _showError(error: string|string[]): void {
    if (error instanceof Array) {
      error.forEach((err) => this._displayError(err));
    } else {
      this._displayError(<string>error);
    }
  }

  private _displayError(err: string): void {
    this._toastService.error(err);
  };
}

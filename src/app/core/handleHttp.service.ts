import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import 'rxjs/add/observable/throw';


@Injectable()
export class HandleHttpService {
  constructor(public toastr: ToastsManager) { }

  handleError(err:Response | any){
    var errorsDict = err.json();  // Example: {"custom_errors": ["User is already competitor!"]}
    Object.keys(errorsDict).forEach((error) => this._showError(errorsDict[error]))
    return Observable.throw(err);
  }

  private _showError(error:string|string[]):void {
    if (error instanceof Array){
      error.forEach((err) => this._displayError(err));
    } else this._displayError(error);
  }

  private _displayError(err:string):void {
    this.toastr.error(err);
  };
}
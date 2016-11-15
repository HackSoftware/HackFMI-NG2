import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';


@Injectable()
export class HandleHttpService {
  constructor() { }

  handleError(err){
    console.log(err);
    return Observable.throw(err);
  }
}
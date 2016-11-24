import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AuthHttp } from './authHttp.service';


@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    AuthHttp,
    AuthService,
  ]
})
export class AuthModule { }
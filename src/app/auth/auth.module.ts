import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AuthHttp } from './auth-http.service';


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
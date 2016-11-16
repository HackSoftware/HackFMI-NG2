import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { LoginService } from './login.service';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    LoginRoutingModule
  ],
  exports: [
    LoginRoutingModule],
  providers: [,
    LoginService,
    {
      provide: 'Window',
      useValue: window
    },
  ],
})
export class LoginModule { }
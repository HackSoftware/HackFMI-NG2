import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';


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
    LoginRoutingModule
  ],
  providers: [,
    LoginService,
    {
      provide: 'Window',
      useValue: window
    },
  ],
})
export class LoginModule { }

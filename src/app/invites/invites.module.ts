import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitesService } from './invites.service';
import { InvitesComponent } from './invites.component';
import { InvitesListResolver } from './invites.resolver';
import { InvitesRoutingModule } from './invites.routing';


@NgModule({
  declarations: [
    InvitesComponent,
  ],
  imports: [
    CommonModule,

    InvitesRoutingModule
  ],
  exports: [InvitesRoutingModule],
  providers: [InvitesService, InvitesListResolver],
})
export class InvitesModule { }
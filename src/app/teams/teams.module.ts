import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsComponent } from './teams.component';
import { TeamsRoutingModule } from './teams.routing';
import { TeamsService } from './teams.service';
import { PublicTeamsListResolver } from './teams.resolver';
import { DetailComponent } from './detail/detail.component';
import { PrivateListComponent } from './list/private-list/private-list.component';
import { PublicListComponent } from './list/public-list/public-list.component';

@NgModule({
  declarations: [
    TeamsComponent,
    PublicListComponent,
    PrivateListComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,

    TeamsRoutingModule
  ],
  exports: [TeamsRoutingModule],
  providers: [TeamsService, PublicTeamsListResolver],
})
export class TeamsModule { }
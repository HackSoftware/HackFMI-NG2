import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsService } from './teams.service';
import { TeamsRoutingModule } from './teams.routing';
import { TeamsComponent } from './teams.component';
import { DetailComponent } from './detail/detail.component';
import { PublicListComponent } from './list/public-list/public-list.component';
import { PrivateListComponent } from './list/private-list/private-list.component';
import { PublicTeamsListResolver, PrivateTeamsListResolver } from './teams.resolver';

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
  providers: [TeamsService, PublicTeamsListResolver, PrivateTeamsListResolver],
})
export class TeamsModule { }
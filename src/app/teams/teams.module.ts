import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TeamsService } from './teams.service';
import { TeamsRoutingModule } from './teams.routing';
import { TeamsComponent } from './teams.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { PublicListComponent } from './list/public-list/public-list.component';
import { PrivateListComponent } from './list/private-list/private-list.component';
import { PublicTeamsListResolver, PrivateTeamsListResolver, TeamDetailsResolver } from './teams.resolver';

@NgModule({
  declarations: [
    TeamsComponent,
    PublicListComponent,
    PrivateListComponent,
    DetailComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    TeamsRoutingModule
  ],
  exports: [TeamsRoutingModule],
  providers: [
    TeamsService,
    PublicTeamsListResolver,
    PrivateTeamsListResolver,
    TeamDetailsResolver
  ]
})
export class TeamsModule { }
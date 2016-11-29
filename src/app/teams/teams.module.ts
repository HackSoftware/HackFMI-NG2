import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TeamsService } from './teams.service';
import { TeamsComponent } from './teams.component';
import { InvitesService } from '../invites/invites.service';
import { TeamsRoutingModule } from './teams.routing';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { PublicListComponent } from './list/public-list/public-list.component';
import { PrivateListComponent } from './list/private-list/private-list.component';
import { SeasonCompetitorInfoService } from '../core/seasonCompetitorInfo.service';
import { PublicTeamsListResolver, PrivateTeamsListResolver, TeamDetailsResolver } from './teams.resolver';

@NgModule({
  declarations: [
    TeamsComponent,
    PublicListComponent,
    PrivateListComponent,
    DetailComponent,
    CreateComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    TeamsRoutingModule
  ],
  exports: [TeamsRoutingModule],
  providers: [
    TeamsService,
    InvitesService,
    TeamDetailsResolver,
    PublicTeamsListResolver,
    PrivateTeamsListResolver,
    SeasonCompetitorInfoService
  ]
})
export class TeamsModule { }
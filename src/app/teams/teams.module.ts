import { NgModule } from '@angular/core';

import { TeamsComponent } from './teams.component';
import { PrivateListComponent } from './list/private-list/private-list.component';
import { PublicListComponent } from './list/public-list/public-list.component';
import { TeamsRoutingModule } from './teams.routing';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    TeamsComponent,
    PublicListComponent,
    PrivateListComponent,
    DetailComponent,
  ],
  imports: [
    TeamsRoutingModule
  ],
  exports: [TeamsRoutingModule],
  providers: [],
})
export class TeamsModule { }
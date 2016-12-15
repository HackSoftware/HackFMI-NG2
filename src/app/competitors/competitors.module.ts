import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitorsService } from './competitors.service';
import { CompetitorsResolver } from './competitors.resolver';
import { CompetitorsComponent } from './competitors.component';
import { CompetitorsRoutingModule } from './competitors.routing';


@NgModule({
  declarations: [
    CompetitorsComponent,
  ],
  imports: [
    CommonModule,

    CompetitorsRoutingModule
  ],
  exports: [CompetitorsRoutingModule],
  providers: [CompetitorsResolver, CompetitorsService],
})
export class CompetitorsModule { }

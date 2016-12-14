import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorsService } from './mentors.service';
import { MentorsRoutingModule } from './mentors.routing';
import { MentorsScheduleComponent } from './schedule/schedule.mentors.component';
import { PublicMentorsComponent } from './public/public.mentors.component';
import { PrivateMentorsComponent } from './private/private.mentors.component';
import { MentorsListResolver, MentorsForTeamResolver } from './mentors.resolver';


@NgModule({
  declarations: [
    PublicMentorsComponent,
    PrivateMentorsComponent,
    MentorsScheduleComponent,
  ],
  imports: [
    CommonModule,

    MentorsRoutingModule
  ],
  exports: [MentorsRoutingModule],
  providers: [
    MentorsService,
    MentorsListResolver,
    MentorsForTeamResolver
  ]
})
export class MentorsModule { }
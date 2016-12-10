import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorsRoutingModule } from './mentors.routing';
import { MentorsService } from './mentors.service';
import { MentorsListResolver } from './mentors.resolver';
import { PublicMentorsComponent } from './public/public.mentors.component';
import { PrivateMentorsComponent } from './private/private.mentors.component';


@NgModule({
  declarations: [
    PublicMentorsComponent,
    PrivateMentorsComponent,
  ],
  imports: [
    CommonModule,

    MentorsRoutingModule
  ],
  exports: [MentorsRoutingModule],
  providers: [MentorsService, MentorsListResolver],
})
export class MentorsModule { }
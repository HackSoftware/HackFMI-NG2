import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorsComponent } from './mentors.component';
import { MentorsRoutingModule } from './mentors.routing';
import { MentorsService } from './mentors.service';
import { MentorsListResolver } from './mentors.resolver';

@NgModule({
  declarations: [
    MentorsComponent,
  ],
  imports: [
    CommonModule,

    MentorsRoutingModule
  ],
  exports: [MentorsRoutingModule],
  providers: [MentorsService, MentorsListResolver],
})
export class MentorsModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorsComponent } from './mentors.component';
import { MentorsRoutingModule } from './mentors.routing';
import { MentorsService } from './mentors.service';

@NgModule({
  declarations: [
    MentorsComponent,
  ],
  imports: [
    CommonModule,

    MentorsRoutingModule
  ],
  exports: [MentorsRoutingModule],
  providers: [MentorsService],
})
export class MentorsModule { }
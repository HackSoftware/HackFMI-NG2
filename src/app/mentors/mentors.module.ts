import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorsComponent } from './mentors.component';
import { MentorsRoutingModule } from './mentors.routing';


@NgModule({
  declarations: [
    MentorsComponent,
  ],
  imports: [
    CommonModule,

    MentorsRoutingModule
  ],
  exports: [MentorsRoutingModule],
  providers: [],
})
export class MentorsModule { }
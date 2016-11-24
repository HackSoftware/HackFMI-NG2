import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MentorsListResolver } from './mentors.resolver';
import { MentorsComponent } from './mentors.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'mentors',
      component: MentorsComponent,
      resolve: {
        mentors: MentorsListResolver
      }
    },
  ])],
  exports: [RouterModule]
})
export class MentorsRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { MentorsListResolver } from './mentors.resolver';
import { MentorsComponent } from './mentors.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'mentors',
      component: MentorsComponent,
      canActivate: [AuthService],
      resolve: {
        mentors: MentorsListResolver
      }
    },
  ])],
  exports: [RouterModule]
})
export class MentorsRoutingModule {}
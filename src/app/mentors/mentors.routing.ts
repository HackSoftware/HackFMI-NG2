import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { MentorsComponent } from './mentors.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'mentors',
      component: MentorsComponent,
      canActivate: [AuthService]
    },
  ])],
  exports: [RouterModule]
})
export class MentorsRoutingModule {}
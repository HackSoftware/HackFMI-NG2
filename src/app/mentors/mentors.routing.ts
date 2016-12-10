import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MeSeasonResolver } from '../core/me.resolver';
import { AuthGuardService } from '../guard/auth-guard.service';
import { TeamsGuardService } from '../guard/teams-guard.service';
import { MentorsGuardService } from '../guard/mentors-guard.service';


import { MentorsListResolver } from './mentors.resolver';
import { PublicMentorsComponent } from './public/public.mentors.component';
import { PrivateMentorsComponent } from './private/private.mentors.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'mentors',
      children: [
        {
          path: '',
          component: PrivateMentorsComponent,
          canActivate: [
            MentorsGuardService
          ],
          resolve: {
            mentors: MentorsListResolver,
            meDetails: MeSeasonResolver
          }
        },
        {
          path: 'public',
          component: PublicMentorsComponent,
          resolve: {
            mentors: MentorsListResolver
          }
        },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class MentorsRoutingModule {}
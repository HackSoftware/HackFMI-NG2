import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MeSeasonResolver } from '../core/me.resolver';
import { SeasonResolver } from '../core/season.resolver';
import { AuthGuardService } from '../guard/auth-guard.service';
import { TeamsGuardService } from '../guard/teams-guard.service';
import { MentorsGuardService } from '../guard/mentors-guard.service';


import { PublicMentorsComponent } from './public/public.mentors.component';
import { PrivateMentorsComponent } from './private/private.mentors.component';
import { MentorsListResolver, MentorsForTeamResolver } from './mentors.resolver';


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
            seasonInfo: SeasonResolver,
            meDetails: MeSeasonResolver,
            mentors: MentorsListResolver,
            mentorsForTeam: MentorsForTeamResolver,
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
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MeSeasonResolver } from '../core/me/me.resolver';
import { AuthGuardService } from '../guard/auth-guard.service';
import { TeamsGuardService } from '../guard/teams-guard.service';
import { SeasonInfoResolver } from '../core/season/season.resolver';
import { MentorsGuardService } from '../guard/mentors-guard.service';
import { MentorsPartOfTeamGuardService } from '../guard/mentors-part-of-team-guard.service';

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
            MentorsGuardService,
            MentorsPartOfTeamGuardService
          ],
          resolve: {
            meDetails: MeSeasonResolver,
            mentors: MentorsListResolver,
            seasonInfo: SeasonInfoResolver,
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
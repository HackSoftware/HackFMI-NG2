import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MeSeasonResolver } from '../core/me/me.resolver';
import { AuthGuardService } from '../guard/auth-guard.service';
import { SkillsResolver } from '../core/skills/skills.resolver';
import { TeamsGuardService } from '../guard/teams-guard.service';
import { LeaderGuardService } from '../guard/leader-guard.service';
import { OnboardingGuardService } from '../guard/onboarding-guard.service';

import { TeamsComponent } from './teams.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { PublicListComponent } from './list/public-list/public-list.component';
import { PrivateListComponent } from './list/private-list/private-list.component';
import { PublicTeamsListResolver, PrivateTeamsListResolver, TeamDetailsResolver } from './teams.resolver';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'teams',
      component: TeamsComponent,
      children: [
        {
          path: '',
          component: PrivateListComponent,
          canActivate: [
            TeamsGuardService,
            OnboardingGuardService
          ],
          resolve: {
            meDetails: MeSeasonResolver,
            privateTeams: PrivateTeamsListResolver
          }
        },
        {
          path: 'public',
          component: PublicListComponent,
          resolve: {
            publicTeams: PublicTeamsListResolver
          }
        },
        {
          path: 'create',
          component: CreateComponent,
          canActivate: [
            AuthGuardService,
            OnboardingGuardService
          ],
          resolve: {
            skills: SkillsResolver
          }
        },
        {
          path: ':id/edit',
          component: UpdateComponent,
          canActivate: [
            AuthGuardService,
            OnboardingGuardService,
            LeaderGuardService
          ],
          resolve: {
            skills: SkillsResolver,
            teamDetails: TeamDetailsResolver
          }
        },
        {
          path: ':id',
          component: DetailComponent,
          canActivate: [
            AuthGuardService,
            OnboardingGuardService
          ],
          resolve: {
            meDetails: MeSeasonResolver,
            teamDetails: TeamDetailsResolver
          }
        },
      ]
    }
  ])],
  exports: [RouterModule]
})
export class TeamsRoutingModule { }

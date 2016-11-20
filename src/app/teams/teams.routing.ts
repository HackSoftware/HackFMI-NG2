import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { MeSeasonResolver } from '../core/me.resolver';
import { SkillsResolver } from '../core/skills.resolver';
import { TeamsGuardService } from '../guard/teams-guard.service';
import { OnboardingGuardService } from '../guard/onboarding-guard.service';

import { TeamsComponent } from './teams.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { PublicListComponent } from './list/public-list/public-list.component';
import { PrivateListComponent } from './list/private-list/private-list.component';
import { PublicTeamsListResolver, PrivateTeamsListResolver,
         TeamDetailsResolver } from './teams.resolver';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'teams',
      component: TeamsComponent,
      children: [
        {
          path: '',
          component: PrivateListComponent,
          canActivate: [TeamsGuardService, OnboardingGuardService],
          resolve: {
            privateTeams: PrivateTeamsListResolver,
            meDetails: MeSeasonResolver
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
          canActivate: [AuthService],
          resolve: {
            skills: SkillsResolver
          }
        },
        {
          path: ':id',
          component: DetailComponent,
          canActivate: [AuthService],
          resolve: {
            teamDetails: TeamDetailsResolver,
            meDetails: MeSeasonResolver
          }
        },
      ]
    }
  ])],
  exports: [RouterModule]
})

export class TeamsRoutingModule {}
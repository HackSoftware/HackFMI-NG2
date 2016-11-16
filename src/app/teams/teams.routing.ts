import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { TeamsGuardService } from '../guard/teams-guard.service';

import { TeamsComponent } from './teams.component';
import { PublicTeamsListResolver } from './teams.resolver';
import { DetailComponent } from './detail/detail.component';
import { PublicListComponent } from './list/public-list/public-list.component';
import { PrivateListComponent } from './list/private-list/private-list.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'teams',
      component: TeamsComponent,
      children: [
        {
          path: '',
          component: PrivateListComponent,
          canActivate: [TeamsGuardService]
        },
        {
          path: 'public',
          component: PublicListComponent,
          resolve: {
            publicTeams: PublicTeamsListResolver
          }
        },
        {
          path: ':id',
          component: DetailComponent,
          canActivate: [AuthService]
        },
      ]
    }
  ])],
  exports: [RouterModule]
})

export class TeamsRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CompetitorsComponent } from './competitors.component';
import { CompetitorsResolver } from './competitors.resolver';
import { AuthService } from '../auth/auth.service';
import {LeaderGuardService } from '../guard/leader-guard.service';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'competitors',
      component: CompetitorsComponent,
      canActivate: [AuthService, LeaderGuardService],
      resolve: {
        competitors: CompetitorsResolver
      }
    },
  ])],
  exports: [RouterModule]
})
export class CompetitorsRoutingModule {}
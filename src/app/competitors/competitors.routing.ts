import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuardService} from '../guard/auth-guard.service';
import { LeaderGuardService } from '../guard/leader-guard.service';

import { CompetitorsResolver } from './competitors.resolver';
import { CompetitorsComponent } from './competitors.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'competitors',
      component: CompetitorsComponent,
      canActivate: [
        AuthGuardService,
        LeaderGuardService
      ],
      resolve: {
        competitors: CompetitorsResolver
      }
    },
  ])],
  exports: [RouterModule]
})
export class CompetitorsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuardService } from '../guard/auth-guard.service';
import { OnboardingGuardService } from '../guard/onboarding-guard.service';

import { InvitesComponent } from './invites.component';
import { InvitesListResolver } from './invites.resolver';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'invites',
      component: InvitesComponent,
      canActivate: [
        AuthGuardService,
        OnboardingGuardService
      ],
      resolve: {
        invites: InvitesListResolver
      }
    },
  ])],
  exports: [RouterModule]
})
export class InvitesRoutingModule {}
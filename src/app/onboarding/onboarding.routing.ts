import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { SkillsResolver } from '../core/skills.resolver';
import { OnboardingGuardService } from '../guard/onboarding-guard.service';

import { OnboardingComponent } from './onboarding.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'onboarding',
      component: OnboardingComponent,
      canActivate: [AuthService],
      resolve: {
        skills: SkillsResolver
      }
    },
  ])],
  exports: [RouterModule]
})
export class OnBoardingRoutingModule {}

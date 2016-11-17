import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { OnboardingGuardService } from '../guard/onboarding-guard.service';

import { OnboardingComponent } from './onboarding.component';
import { SkillsResolver } from '../core/skills.resolver';


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
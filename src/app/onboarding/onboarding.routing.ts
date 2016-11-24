import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuardService } from '../guard/auth-guard.service';
import { SkillsResolver } from '../core/skills.resolver';
import { OnboardingGuardService } from '../guard/onboarding-guard.service';

import { OnboardingComponent } from './onboarding.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'onboarding',
      component: OnboardingComponent,
      canActivate: [AuthGuardService],
      resolve: {
        skills: SkillsResolver
      }
    },
  ])],
  exports: [RouterModule]
})
export class OnBoardingRoutingModule {}

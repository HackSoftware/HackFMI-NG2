import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuardService } from '../guard/auth-guard.service';
import { SkillsResolver } from '../core/skills/skills.resolver';
import { CompetitorGuardService } from '../guard/competitor-guard.service';

import { OnboardingComponent } from './onboarding.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'onboarding',
      component: OnboardingComponent,
      canActivate: [
        AuthGuardService,
        CompetitorGuardService],
      resolve: {
        skills: SkillsResolver
      }
    },
  ])],
  exports: [RouterModule]
})
export class OnBoardingRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { OnboardingComponent } from './onboarding.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'onboarding',
      component: OnboardingComponent,
      canActivate: [AuthService]
    },
  ])],
  exports: [RouterModule]
})
export class OnBoardingRoutingModule {}
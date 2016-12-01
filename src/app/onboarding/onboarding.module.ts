import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OnboardingService } from './onboarding.service';
import { OnboardingComponent } from './onboarding.component';
import { OnBoardingRoutingModule } from './onboarding.routing';


@NgModule({
  declarations: [
    OnboardingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    OnBoardingRoutingModule
  ],
  exports: [OnBoardingRoutingModule],
  providers: [OnboardingService],
})
export class OnBoardingModule { }
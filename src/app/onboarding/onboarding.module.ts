import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OnboardingComponent } from './onboarding.component';
import { OnboardingService } from './onboarding.service';
import { SkillsResolver } from './onboarding.resolver';
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
  providers: [OnboardingService, SkillsResolver],
})
export class OnBoardingModule { }
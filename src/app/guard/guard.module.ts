import { NgModule } from '@angular/core';

import { TeamsGuardService } from './teams-guard.service';
import { OnboardingGuardService } from './onboarding-guard.service';


@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [OnboardingGuardService, TeamsGuardService],
})
export class GuardModule { }

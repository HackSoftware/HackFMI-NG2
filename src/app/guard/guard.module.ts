import { NgModule } from '@angular/core';

import { TeamsGuardService } from './teams-guard.service';
import { LeaderGuardService } from './leader-guard.service';
import { OnboardingGuardService } from './onboarding-guard.service';


@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    TeamsGuardService,
    LeaderGuardService,
    OnboardingGuardService,
  ],
})
export class GuardModule { }

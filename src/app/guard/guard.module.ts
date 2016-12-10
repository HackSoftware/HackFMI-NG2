import { NgModule } from '@angular/core';

import { AuthGuardService } from './auth-guard.service';
import { TeamsGuardService } from './teams-guard.service';
import { LeaderGuardService } from './leader-guard.service';
import { MentorsGuardService } from './mentors-guard.service';
import { CompetitorGuardService } from './competitor-guard.service';
import { OnboardingGuardService } from './onboarding-guard.service';


@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    AuthGuardService,
    TeamsGuardService,
    LeaderGuardService,
    MentorsGuardService,
    CompetitorGuardService,
    OnboardingGuardService,
  ],
})
export class GuardModule { }

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

import { OnboardingService } from './onboarding.service';


@Injectable()
export class SkillsResolver implements Resolve<any> {
  constructor(private _onboardingService:OnboardingService) {}

  resolve(route: ActivatedRouteSnapshot) {
      return this._onboardingService.getSkills();
  }
}

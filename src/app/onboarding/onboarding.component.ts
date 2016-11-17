import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { OnboardingGuardService } from '../guard/onboarding-guard.service';

import { Skill } from './onboarding.models';
import { OnboardingService } from './onboarding.service';

import 'rxjs/add/operator/map'


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  skills: Skill[];
  shirtSizeMap = {
    "S": 1,
    "M": 2,
    "L": 3,
    "XL": 4
  }
  shirtSizes = ['S', 'M', 'L', 'XL'];

  onboardingInfo = {
    is_vegetarian: false,
    needs_work: false,
    shirt_size: this.shirtSizes[0],
    social_links: '',
    known_skills: []
  }

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _onboardingService: OnboardingService,
              private _onboardingGuardService: OnboardingGuardService) { }

  ngOnInit() {
    this._route.data.subscribe((data: {skills:Skill[]}) => this.skills = data.skills);
  }

  addOrRemoveSkill(id:number): void {
    var index = this.onboardingInfo.known_skills.indexOf(id);

    if (index > -1) {
      this.onboardingInfo.known_skills.splice(index, 1);
    } else {
      this.onboardingInfo.known_skills.push(id);
    }
  }

  setShirtSize(size:string):void {
    this.onboardingInfo.shirt_size = size;
  }

  onboardCompetitor(): void {
    this.onboardingInfo['shirt_size'] = this.shirtSizeMap[this.onboardingInfo['shirt_size']];
    this._onboardingService.onboardCompetitor(this.onboardingInfo)
                           .subscribe(
                             data => this._handleSuccessfulOnboarding());
  }

  private _handleSuccessfulOnboarding() {
    if (this._onboardingGuardService.redirectUrl) {
      this._router.navigate([this._onboardingGuardService.redirectUrl]);
    } else {
      this._router.navigate(['home']);
    }
  }
}

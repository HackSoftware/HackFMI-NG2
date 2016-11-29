import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Skill } from '../core/core.models';
import { MeService } from '../core/me/me.service';
import { OnboardingGuardService } from '../guard/onboarding-guard.service';

import { OnboardingService } from './onboarding.service';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  skills: Skill[];
  /* TODO: Fix this in the backend - field should't be SmallInteger, but Char */
  shirtSizeMap = {
    'S': 1,
    'M': 2,
    'L': 3,
    'XL': 4
  };
  shirtSizes = ['S', 'M', 'L', 'XL'];
  lookingForTeamValue = false;
  onboardingInfo = {
    is_vegetarian: false,
    needs_work: false,
    shirt_size: this.shirtSizes[0],
    social_links: '',
    known_skills: [],
    other_skills: ''
  };

  constructor(private _router: Router,
              private _meService: MeService,
              private _route: ActivatedRoute,
              private _onboardingService: OnboardingService,
              private _onboardingGuardService: OnboardingGuardService) { }

  ngOnInit() {this._route.data.subscribe((data: {skills:Skill[]}) => this.skills = data.skills);}

  addOrRemoveSkill(id:number): void {
    let index = this.onboardingInfo.known_skills.indexOf(id);

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
    var seasonOnboardData = { 'looking_for_team': this.lookingForTeamValue };

    this._onboardingService.onboardSeasonCompetitor(this.onboardingInfo, seasonOnboardData)
                           .subscribe(data => this._handleSuccessfulOnboarding());
  }

  private _handleSuccessfulOnboarding() {
    if (this._onboardingGuardService.redirectUrl) {
      this._router.navigate([this._onboardingGuardService.redirectUrl]);
    } else {
      this._router.navigate(['home']);
    }
  }
}

import { Component, OnInit } from '@angular/core';

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
  shirtSizes = ['S', 'M', 'L', 'XL'];

  onboardingInfo = {
    is_vegetarian: false,
    needs_work: false,
    shirt_size: this.shirtSizes[0],
    social_links: '',
    known_skills: []
  }

  constructor(private _onboardingService: OnboardingService) {
    this._onboardingService.getSkills()
      .subscribe((data:any) => {
        this.skills = data;
      }, (err) => {
        console.log(err);
      })
  }

  onBoardCompetitor(): void {
    // TODO: Send request for onboarding! Authenticate yourself!
    console.log(this.onboardingInfo);
  }

  addOrRemoveSkill(id:number): void {
    var index = this.onboardingInfo.known_skills.indexOf(id);
    if (index > -1) {
      this.onboardingInfo.known_skills.splice(index, 1);
    } else this.onboardingInfo.known_skills.push(id);
  }

  setShirtSize(size:string):void {
    this.onboardingInfo.shirt_size = size;
  }

  ngOnInit() {
  }

}

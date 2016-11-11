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

  constructor(private _onboardingService: OnboardingService) {
    this._onboardingService.getSkills()
      .subscribe((data:any) => {
        this.skills = data;
        console.log(data)
      }, (err) => {
        console.log(err);
      })
  }

  onBoardCompetitor(): void {
    // do stuff
  }

  ngOnInit() {
  }

}

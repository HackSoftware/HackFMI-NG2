import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

import { SkillsService } from './skills.service';


@Injectable()
export class SkillsResolver implements Resolve<any> {
  constructor(private _skillsService:SkillsService) {}

  resolve(route: ActivatedRouteSnapshot) {
      return this._skillsService.getSkills();
  }
}

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot} from '@angular/router';

import { Skill } from '../core.models';
import { SkillsService } from './skills.service';


@Injectable()
export class SkillsResolver implements Resolve<Skill[]> {
  constructor(private _skillsService:SkillsService) {}

  resolve(route: ActivatedRouteSnapshot) {
      return this._skillsService.getSkills();
  }
}

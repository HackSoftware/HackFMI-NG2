import { NgModule } from '@angular/core';

import { MeService } from './me.service';
import { SeasonService } from './season.service';
import { SkillsService } from './skills.service';
import { SkillsResolver } from './skills.resolver';
import { ApiUrlsService } from './apiUrls.service';
import { HandleHttpService } from './handleHttp.service';


@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    MeService,
    SkillsService,
    SeasonService,
    ApiUrlsService,
    HandleHttpService,

    SkillsResolver,
  ]
})
export class CoreModule { }
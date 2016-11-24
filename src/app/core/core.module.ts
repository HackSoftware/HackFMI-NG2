import { NgModule } from '@angular/core';

import { MeService } from './me.service';
import { LogoutService } from './logout.service';
import { MeSeasonResolver } from './me.resolver';
import { SeasonService } from './season.service';
import { SkillsService } from './skills.service';
import { SkillsResolver } from './skills.resolver';
import { ApiUrlsService } from './apiUrls.service';
import { UrlParamsService } from './urlParams.service';
import { HandleHttpService } from './handleHttp.service';
import { DefaultHttpService } from './defaultHttp.service';


@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    MeService,
    LogoutService,
    SkillsService,
    SeasonService,
    ApiUrlsService,
    UrlParamsService,
    HandleHttpService,
    DefaultHttpService,

    MeSeasonResolver,
    SkillsResolver,
  ]
})
export class CoreModule { }
import { NgModule } from '@angular/core';

import { MeService } from './me/me.service';
import { LogoutService } from './logout.service';
import { ApiUrlsService } from './api-urls.service';
import { MeSeasonResolver } from './me/me.resolver';
import { WebSocketService } from './websocket.service';
import { UrlParamsService } from './url-params.service';
import { SeasonService } from './season/season.service';
import { SkillsService } from './skills/skills.service';
import { SkillsResolver } from './skills/skills.resolver';
import { HandleHttpService } from './handle-http.service';
import { DefaultHttpService } from './default-http.service';
import { SeasonInfoResolver } from './season/season.resolver';
import { SeasonCompetitorInfoService } from './season/season-competitor-info.service';


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
    WebSocketService,
    HandleHttpService,
    DefaultHttpService,
    SeasonCompetitorInfoService,

    SkillsResolver,
    MeSeasonResolver,
    SeasonInfoResolver,
  ]
})
export class CoreModule { }
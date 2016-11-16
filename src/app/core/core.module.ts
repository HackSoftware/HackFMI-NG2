import { NgModule } from '@angular/core';

import { MeService } from './me.service';
import { ApiUrlsService } from './apiUrls.service';
import { HandleHttpService } from './handleHttp.service';
import { SeasonService } from './season.service';


@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [ApiUrlsService, HandleHttpService, MeService, SeasonService],
})
export class CoreModule { }
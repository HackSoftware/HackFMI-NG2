import { NgModule } from '@angular/core';

import { ApiUrlsService } from './apiUrls.service';
import { HandleHttpService } from './handleHttp.service';


@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [ApiUrlsService, HandleHttpService],
})
export class CoreModule { }
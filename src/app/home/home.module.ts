import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { SeasonDetailsResolver } from './home.resolver';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,

    HomeRoutingModule
  ],
  exports: [HomeRoutingModule],
  providers: [HomeService, SeasonDetailsResolver],
})
export class HomeModule { }
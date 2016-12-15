import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,

    HomeRoutingModule
  ],
  exports: [HomeRoutingModule],
  providers: [],
})
export class HomeModule { }

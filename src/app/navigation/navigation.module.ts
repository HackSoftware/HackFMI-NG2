import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { appRoutes } from '../app.routing';

import { NavigationService } from './navigation.service';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    CommonModule,

    appRoutes,
  ],
  exports: [NavigationComponent],
  providers: [NavigationService],
})
export class NavigationModule { }
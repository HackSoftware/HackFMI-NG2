import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation.component';
import { NavigationService } from './navigation.service';

@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [NavigationComponent],
  providers: [NavigationService],
})
export class NavigationModule { }
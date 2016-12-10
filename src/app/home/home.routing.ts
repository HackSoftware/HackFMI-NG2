import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SeasonInfoResolver } from '../core/season/season.resolver';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'home',
      component: HomeComponent,
      resolve: {
        season: SeasonInfoResolver
      }
    },
  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
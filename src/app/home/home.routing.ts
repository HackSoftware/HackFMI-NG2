import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SeasonResolver } from '../core/season.resolver';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'home',
      component: HomeComponent,
      resolve: {
        season: SeasonResolver
      }
    },
  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

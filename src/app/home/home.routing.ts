import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SeasonDetailsResolver } from './home.resolver';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'home',
      component: HomeComponent,
      resolve: {
        season: SeasonDetailsResolver
      }
    },
  ])],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
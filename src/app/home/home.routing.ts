import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'home',
      component: HomeComponent,
      canActivate: [AuthService]
    },
  ])],
  exports: [RouterModule]
})

export class HomeRoutingModule {}
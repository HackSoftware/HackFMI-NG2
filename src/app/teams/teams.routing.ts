import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { TeamsComponent } from './teams.component';
import { PrivateListComponent } from './list/private-list/private-list.component';
import { PublicListComponent } from './list/public-list/public-list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'teams',
      component: TeamsComponent,
      children: [
        {
          path: '',
          component: PublicListComponent
        },
        {
          path: 'private',
          component: PrivateListComponent,
          canActivate: [AuthService]
        },
        {
          path: ':id',
          component: DetailComponent,
          canActivate: [AuthService]
        },
      ]
    }
  ])],
  exports: [RouterModule]
})

export class TeamsRoutingModule {}
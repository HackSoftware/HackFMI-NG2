import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { InvitesComponent } from './invites.component';
import { InvitesListResolver } from './invites.resolver';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'invites',
      component: InvitesComponent,
      resolve: {
        invites: InvitesListResolver
      }
    },
  ])],
  exports: [RouterModule]
})
export class InvitesRoutingModule {}
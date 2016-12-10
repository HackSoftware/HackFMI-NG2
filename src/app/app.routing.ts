import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  /*
  If lazy loading is needed, do it here!
  A lazy loaded module location is a string, not a type. Example:
  { path: 'teams', loadChildren: 'app/teams/teams.module#TeamsModule' },
  */
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);

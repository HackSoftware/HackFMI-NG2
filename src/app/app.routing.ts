import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
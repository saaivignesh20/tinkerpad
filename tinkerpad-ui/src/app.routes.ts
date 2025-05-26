import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then(
        (comp) => comp.HomeComponent
      ),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./components/auth/auth.component').then(
        (comp) => comp.AuthComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

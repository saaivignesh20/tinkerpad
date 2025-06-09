import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/home/home.component').then((comp) => comp.HomeComponent)
  },
  {
    path: 'conversation',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./pages/conversation/conversation.component').then(
        (comp) => comp.ConversationComponent
      )
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

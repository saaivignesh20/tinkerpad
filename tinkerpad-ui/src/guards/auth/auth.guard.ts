import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

export const authGuard: CanActivateFn = (route, state) => {
  /** Auth0's Authentication Service */
  const auth = inject(AuthService);

  auth.isAuthenticated$.subscribe((isAuthenticated) => {
    if (!isAuthenticated) auth.loginWithRedirect();
  });

  return true;
};

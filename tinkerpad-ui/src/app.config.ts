import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAuth0({
      domain: 'tinkerpad.us.auth0.com',
      clientId: 'G9Ji3iyv5NJW3NjCGeSQCaoTnEi77KUF',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ]
};

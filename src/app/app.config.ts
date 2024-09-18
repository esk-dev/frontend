import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideEnvironment } from '@core/env';
import { contentTypeInterceptor } from '@core/http';
import { environment } from '../environments/environment';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideEnvironment(environment),
    provideHttpClient(withInterceptors([contentTypeInterceptor])),
  ],
};

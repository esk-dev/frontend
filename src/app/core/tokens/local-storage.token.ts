import { inject, InjectionToken } from '@angular/core';
import { WA_WINDOW } from '@core/tokens/window.token';

export const SESSION_STORAGE = new InjectionToken<Storage>('[WA_SESSION_STORAGE]', {
  factory: () => inject(WA_WINDOW).sessionStorage,
});

import { InjectionToken, EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { NAVIGATION_LINKS, NAVIGATION_PATHS } from './paths';
import { INavigationLink, INavigationPaths } from './navigation.interface';

export const PATHS = new InjectionToken<INavigationPaths>('NavigationPaths');

export const LINKS = new InjectionToken<INavigationLink[]>('NavigationLinks');

export function provideNavigationPaths(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: PATHS,
      useValue: NAVIGATION_PATHS,
    },
    {
      provide: LINKS,
      useValue: NAVIGATION_LINKS,
    },
  ]);
}

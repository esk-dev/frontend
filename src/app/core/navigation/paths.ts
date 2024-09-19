import { INavigationLink, INavigationPaths } from './navigation.interface';

export const NAVIGATION_PATHS: INavigationPaths = {
  main: 'main',
  notes: 'notes',
  tags: 'tags',
  create_note: 'create_note',
};

export const NAVIGATION_LINKS: INavigationLink[] = [
  {
    route: 'main',
    label: 'Главная',
  },
  {
    route: 'notes',
    label: 'Заметки',
  },
  {
    route: 'tags',
    label: 'Теги',
  },
];

export const getLinkByRoute = (route: keyof INavigationPaths): INavigationLink | undefined =>
  NAVIGATION_LINKS.find((link) => link.route === route);

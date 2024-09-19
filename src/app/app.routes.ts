import { Routes } from '@angular/router';
import { NAVIGATION_PATHS } from '@core/navigation';

export const routes: Routes = [
  {
    path: '',
    title: 'NotesApp',
    loadComponent: () => import('@ui/layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        redirectTo: `/${NAVIGATION_PATHS.main}`,
        pathMatch: 'full',
      },
      {
        title: 'Главная',
        path: NAVIGATION_PATHS.main,
        loadComponent: () => import('@pages/main/main.component').then((m) => m.MainComponent),
      },
      {
        title: 'Заметки',
        path: NAVIGATION_PATHS.notes,
        loadComponent: () => import('@pages/notes/notes.component').then((m) => m.NotesComponent),
      },
      {
        title: 'Создание заметки',
        path: NAVIGATION_PATHS.create_note,
        loadComponent: () => import('@pages/create-note/create-note.component').then((m) => m.CreateNoteComponent),
      },
      {
        title: 'Теги',
        path: NAVIGATION_PATHS.tags,
        loadComponent: () => import('@pages/tags/tags.component').then((m) => m.TagsComponent),
      },
    ],
  },
];

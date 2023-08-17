import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('@views/unauthorized/unauthorized.component').then(
        c => c.UnauthorizedComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'unauthorized',
  },
  {
    path: '**',
    redirectTo: 'unauthorized',
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@views/auth/auth.routes').then(r => r.authRoutes),
  },
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
    redirectTo: 'auth',
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

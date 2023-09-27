import { Routes } from '@angular/router';
import { authGuard } from '@core/guards';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@views/auth/auth.routes').then(r => r.authRoutes),
  },
  {
    path: 'main',
    title: 'TITLE.DASHBOARD',
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    loadChildren: () => import('@views/main/main.routes').then(r => r.mainRoutes),
  },
  {
    path: 'unauthorized',
    title: 'TITLE.UNAUTHORIZED',
    loadComponent: () => import('@views/unauthorized/unauthorized.component').then(c => c.UnauthorizedComponent),
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

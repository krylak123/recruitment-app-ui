import { Routes } from '@angular/router';
import { sharedDataAccessProviders } from '@shared/data-access';

import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    providers: [sharedDataAccessProviders],
    children: [
      {
        path: 'creators',
        title: 'TITLE.CREATORS',
        loadChildren: () => import('./views/creators/creators.routes').then(r => r.creatorsRoutes),
        data: {
          breadcrumb: 'BREADCRUMB.CREATORS',
        },
      },
      {
        path: 'tasks',
        title: 'TITLE.TASKS',
        loadChildren: () => import('./views/tasks/tasks.routes').then(r => r.tasksRoutes),
        data: {
          breadcrumb: 'BREADCRUMB.TASKS',
        },
      },
      {
        path: 'users',
        title: 'TITLE.USERS',
        loadChildren: () => import('./views/users/users.routes').then(r => r.usersRoutes),
        data: {
          breadcrumb: 'BREADCRUMB.USERS',
        },
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

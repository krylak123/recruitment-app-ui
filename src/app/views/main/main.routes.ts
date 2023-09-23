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

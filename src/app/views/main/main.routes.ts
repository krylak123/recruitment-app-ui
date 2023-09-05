import { Routes } from '@angular/router';
import { MainComponent } from '@views/main/main.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'creators',
        title: 'TITLE.CREATORS',
        loadChildren: () => import('@views/main/views/creators/creators.routes').then(r => r.creatorsRoutes),
        data: {
          breadcrumb: 'Kreatory',
        },
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
];

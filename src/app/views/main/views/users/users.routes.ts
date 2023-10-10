import { Routes } from '@angular/router';

export const usersRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'candidates',
        title: 'TITLE.CANDIDATES',
        loadChildren: () => import('./candidates/candidates.routes').then(r => r.candidatesRoutes),
        data: {
          breadcrumb: 'BREADCRUMB.CANDIDATES',
        },
      },
      {
        path: 'employees',
        title: 'TITLE.EMPLOYEES',
        loadChildren: () => import('./employees/employees.routes').then(r => r.employeesRoutes),
        data: {
          breadcrumb: 'BREADCRUMB.EMPLOYEES',
        },
      },
      {
        path: '**',
        redirectTo: 'candidates',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'candidates',
  },
  {
    path: '**',
    redirectTo: 'candidates',
  },
];

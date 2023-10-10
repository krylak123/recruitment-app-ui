import { Routes } from '@angular/router';

import { EmployeesComponent } from './employees.component';

export const employeesRoutes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

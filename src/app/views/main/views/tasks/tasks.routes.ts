import { Routes } from '@angular/router';

import { TasksComponent } from './tasks.component';

export const tasksRoutes: Routes = [
  {
    path: '',
    component: TasksComponent,
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

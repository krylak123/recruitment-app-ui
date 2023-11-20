import { Routes } from '@angular/router';

import { TasksComponent } from './tasks.component';

export const tasksRoutes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
  {
    path: 'exam',
    title: 'TITLE.EXAM_LIST',
    loadComponent: () => import('./views/task-exam/task-exam.component').then(c => c.TaskExamComponent),
    data: {
      breadcrumb: 'BREADCRUMB.EXAM',
    },
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

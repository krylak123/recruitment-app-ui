import { Routes } from '@angular/router';

import { TasksComponent } from './tasks.component';

export const tasksRoutes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
  {
    path: 'questions',
    title: 'TITLE.QUESTION_LIST',
    loadComponent: () => import('./views/task-question/task-question.component').then(c => c.TaskQuestionComponent),
    data: {
      breadcrumb: 'BREADCRUMB.QUESTIONS',
    },
  },
  {
    path: 'exam',
    title: 'TITLE.EXAM_LIST',
    loadComponent: () => import('./views/task-exam/task-exam.component').then(c => c.TaskExamComponent),
    data: {
      breadcrumb: 'BREADCRUMB.EXAMS',
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

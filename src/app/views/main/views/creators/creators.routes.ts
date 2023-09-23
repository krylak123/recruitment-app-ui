import { Routes } from '@angular/router';
import { CreatorsComponent } from '@views/main/views/creators/creators.component';

export const creatorsRoutes: Routes = [
  {
    path: '',
    component: CreatorsComponent,
  },
  {
    path: 'questions',
    title: 'TITLE.QUESTION_ADD',
    loadComponent: () =>
      import('./views/creator-questions/creator-questions.component').then(c => c.CreatorQuestionsComponent),
    data: {
      breadcrumb: 'BREADCRUMB.QUESTION',
    },
  },
  {
    path: 'exam',
    title: 'TITLE.EXAM_ADD',
    loadComponent: () => import('./views/creator-exam/creator-exam.component').then(c => c.CreatorExamComponent),
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

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
    loadComponent: () => import('./views/questions/questions.component').then(c => c.QuestionsComponent),
    data: {
      breadcrumb: 'BREADCRUMB.QUESTION',
    },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
];

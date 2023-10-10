import { Routes } from '@angular/router';

import { CandidatesComponent } from './candidates.component';

export const candidatesRoutes: Routes = [
  {
    path: '',
    component: CandidatesComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

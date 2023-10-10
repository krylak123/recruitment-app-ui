import { Routes } from '@angular/router';
import { CandidatesComponent } from '@views/main/views/users/candidates/candidates.component';

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

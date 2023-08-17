import { Routes } from '@angular/router';
import { AuthComponent } from '@views/auth/auth.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

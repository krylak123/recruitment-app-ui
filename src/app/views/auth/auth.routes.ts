import { Routes } from '@angular/router';
import { AuthComponent } from '@views/auth/auth.component';
import { SignInComponent } from '@views/auth/components/sign-in/sign-in.component';
import { SignUpComponent } from '@views/auth/components/sign-up/sign-up.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'signin',
        title: 'TITLE.SIGN_IN',
        component: SignInComponent,
      },
      {
        path: 'signup',
        title: 'TITLE.SIGN_UP',
        component: SignUpComponent,
      },
      {
        path: '**',
        redirectTo: 'signin',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signin',
  },
];

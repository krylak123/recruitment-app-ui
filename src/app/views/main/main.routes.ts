import { Routes } from '@angular/router';
import { MainComponent } from '@views/main/main.component';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
];

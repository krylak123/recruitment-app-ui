import { Routes } from '@angular/router';
import { CreatorsComponent } from '@views/creators/creators.component';

export const creatorsRoutes: Routes = [
  {
    path: '',
    component: CreatorsComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
];

import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { AuthState, authReducer } from './auth/auth.reducer';
import { RouterStateUrl } from './router/custom-route-serializer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  auth: AuthState;
}

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  auth: authReducer,
};

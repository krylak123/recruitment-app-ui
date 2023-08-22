import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { RouterStateUrl } from './router/custom-route-serializer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
};

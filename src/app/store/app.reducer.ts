import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router/custom-route-serializer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
};

import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';

const selectRouter = createSelector(
  (state: AppState) => state.router,
  value => value
);

const selectRouterInfo = createSelector(selectRouter, state => state?.state);

export const selectRouterUrl = createSelector(
  selectRouterInfo,
  state => state?.url
);

export const selectRouterParams = createSelector(
  selectRouterInfo,
  state => state?.params
);

export const selectRouterQueryParams = createSelector(
  selectRouterInfo,
  state => state?.queryParams
);

import { AppState } from '@core/store/app.reducer';
import { AuthState } from '@core/store/auth/auth.reducer';
import { createSelector } from '@ngrx/store';

export const selectAuthStoreState = (state: AppState): AuthState => state.auth;

export const selectAuthCallState = createSelector(selectAuthStoreState, (state: AuthState) => state.callState);
export const selectAuthIsLogged = createSelector(selectAuthStoreState, (state: AuthState) => state.isLogged);

import { AuthActions } from '@core/store/auth/auth.actions';
import { createReducer, on } from '@ngrx/store';
import { ItemState, LoadingState } from '@shared/store';

export interface AuthState extends ItemState {
  isLogged: boolean;
  exp: number;
  user: unknown | null;
}

const initialState: AuthState = {
  isLogged: false,
  exp: 0,
  user: null,
  callState: LoadingState.INIT,
};

export const authReducer = createReducer(
  initialState,
  on(
    AuthActions.login,
    (state): AuthState => ({
      ...state,
      callState: LoadingState.LOADING,
    })
  ),
  on(
    AuthActions.loginSuccess,
    (state, { res }): AuthState => ({
      ...state,
      isLogged: true,
      user: res,
      exp: 123,
      callState: LoadingState.LOADED,
    })
  ),
  on(
    AuthActions.loginFail,
    (state, { error }): AuthState => ({
      ...state,
      ...initialState,
      callState: { error },
    })
  ),
  on(
    AuthActions.logout,
    (state): AuthState => ({
      ...state,
      ...initialState,
    })
  )
);

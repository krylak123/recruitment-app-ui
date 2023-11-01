import { HttpErrorResponse } from '@angular/common/http';
import { LoginPayloadInterface, LoginResponseInterface, RegisterPayloadInterface } from '@backend/auth/models';
import { UserTokenInterface } from '@backend/users';
import { appStorePrefix } from '@core/store/app.constants';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AuthActions = createActionGroup({
  source: appStorePrefix,
  events: {
    login: props<{
      payload: LoginPayloadInterface;
    }>(),
    loginSuccess: props<{
      res: LoginResponseInterface;
    }>(),
    loginFail: props<{
      error: HttpErrorResponse;
    }>(),
    register: props<{
      payload: RegisterPayloadInterface;
    }>(),
    registerSuccess: props<{
      res: LoginResponseInterface;
    }>(),
    registerFail: props<{
      error: HttpErrorResponse;
    }>(),
    logout: emptyProps(),
    setCurrentUser: props<{
      user: UserTokenInterface;
    }>(),
  },
});

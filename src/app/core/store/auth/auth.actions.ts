import { HttpErrorResponse } from '@angular/common/http';
import { LoginPayloadInterface, LoginResponseInterface } from '@backend/auth/models';
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
    logout: emptyProps(),
  },
});

import { Injectable } from '@angular/core';
import { AuthService } from '@backend/auth';
import { ToastService } from '@core/services';
import { AuthActions } from '@core/store/auth/auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable()
export class AuthEffects {
  public login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ payload }) =>
        this.service.login(payload).pipe(
          map(res => AuthActions.loginSuccess({ res })),
          catchError(error => of(AuthActions.loginFail({ error })))
        )
      )
    );
  });

  public loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        map(({ res }) => res.access_token),
        tap(accessToken => {
          localStorage.setItem('access_token', accessToken);

          this.toastService.triggerSuccessToast('AUTH.STORE.LOGIN_SUMMARY', 'AUTH.STORE.SUCCESS_MES.LOGIN_DETAIL');
        })
      );
    },
    { dispatch: false }
  );

  public loginFail$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginFail),
        tap(() => {
          this.toastService.triggerErrorToast('AUTH.STORE.LOGIN_SUMMARY', 'AUTH.STORE.ERROR_MES.LOGIN_DETAIL');
        })
      );
    },
    { dispatch: false }
  );

  public logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('access_token');

          this.toastService.triggerSuccessToast('AUTH.STORE.LOGOUT_SUMMARY', 'AUTH.STORE.SUCCESS_MES.LOGOUT_DETAIL');
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private service: AuthService,
    private toastService: ToastService
  ) {}
}

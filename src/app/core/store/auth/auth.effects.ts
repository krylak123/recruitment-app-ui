import { Injectable } from '@angular/core';
import { AuthService } from '@backend/auth';
import { AuthActions } from '@core/store/auth/auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'primeng/api';
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

          this.messageService.add({
            severity: 'success',
            summary: 'AUTH.STORE.LOGIN_SUMMARY',
            detail: 'AUTH.STORE.SUCCESS_MES.LOGIN_DETAIL',
          });
        })
      );
    },
    { dispatch: false }
  );

  public loginFail$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginFail),
        tap(({ error }) => {
          console.log({
            fromEffectFail: error,
          });
          this.messageService.add({
            severity: 'error',
            summary: 'AUTH.STORE.LOGIN_SUMMARY',
            detail: 'AUTH.STORE.ERROR_MES.LOGIN_DETAIL',
          });
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

          this.messageService.add({
            severity: 'success',
            summary: 'AUTH.STORE.LOGOUT_SUMMARY',
            detail: 'AUTH.STORE.SUCCESS_MES.LOGOUT_DETAIL',
          });
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private service: AuthService,
    private messageService: MessageService
  ) {}
}

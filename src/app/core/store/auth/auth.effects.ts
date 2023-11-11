import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@backend/auth';
import { ToastService } from '@core/services';
import { TokenService } from '@core/services/token.service';
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
          this.tokenService.setUser(accessToken);
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
          this.tokenService.handleLogout();
          this.router.navigate(['unauthorized']).then();

          this.toastService.triggerSuccessToast('AUTH.STORE.LOGOUT_SUMMARY', 'AUTH.STORE.SUCCESS_MES.LOGOUT_DETAIL');
        })
      );
    },
    { dispatch: false }
  );

  public register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap(({ payload }) =>
        this.service.registerUser(payload).pipe(
          map(res => AuthActions.registerSuccess({ res })),
          catchError(error => of(AuthActions.registerFail({ error })))
        )
      )
    );
  });

  public registerSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.registerSuccess),
        map(({ res }) => res.access_token),
        tap(accessToken => {
          this.tokenService.setUser(accessToken);
          this.toastService.triggerSuccessToast(
            'AUTH.STORE.REGISTER_SUMMARY',
            'AUTH.STORE.SUCCESS_MES.REGISTER_DETAIL'
          );
        })
      );
    },
    { dispatch: false }
  );

  public registerFail$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.registerFail),
        tap(() => {
          this.toastService.triggerErrorToast('AUTH.STORE.REGISTER_SUMMARY', 'AUTH.STORE.ERROR_MES.REGISTER_DETAIL');
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private service: AuthService,
    private toastService: ToastService,
    private tokenService: TokenService,
    private router: Router
  ) {}
}

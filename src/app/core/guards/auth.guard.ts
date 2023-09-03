import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { AppState } from '@core/store/app.reducer';
import { selectAuthIsLogged } from '@core/store/auth';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

export const authGuard: CanActivateChildFn = (): Observable<boolean> => {
  const store: Store<AppState> = inject(Store<AppState>);
  const router: Router = inject(Router);

  return store.select(selectAuthIsLogged).pipe(tap(isLogged => !isLogged && router.navigate(['unauthorized']).then()));
};

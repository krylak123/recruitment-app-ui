import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@backend/auth';
import { RegisterPayloadInterface } from '@backend/auth/models';
import { ToastService } from '@core/services';
import { ComponentStore } from '@ngrx/component-store';
import { CallState, LoadingState } from '@shared/store';
import { EMPTY, Observable, catchError, map, switchMap, tap } from 'rxjs';

export interface EmployeeCreateModalState {
  createCallState: CallState;
}

@Injectable()
export class EmployeeCreateModalStore extends ComponentStore<EmployeeCreateModalState> {
  public readonly createCallState$: Observable<CallState> = this.select(state => state.createCallState);
  constructor(
    private toastService: ToastService,
    private authService: AuthService
  ) {
    super({ createCallState: LoadingState.INIT });
  }

  public readonly clearState = this.updater((): EmployeeCreateModalState => ({ createCallState: LoadingState.INIT }));

  public readonly createEmployee = this.effect((payload$: Observable<RegisterPayloadInterface>) => {
    return payload$.pipe(
      tap(() => this.patchState((): EmployeeCreateModalState => ({ createCallState: LoadingState.LOADING }))),
      switchMap(payload =>
        this.authService.registerEmployee(payload).pipe(
          map(() => {
            this.patchState((): EmployeeCreateModalState => ({ createCallState: LoadingState.LOADED }));

            this.toastService.triggerSuccessToast(
              'AUTH.STORE.REGISTER_SUMMARY',
              'AUTH.STORE.SUCCESS_MES.REGISTER_DETAIL'
            );
          }),
          catchError((error: HttpErrorResponse) => {
            this.patchState((): EmployeeCreateModalState => ({ createCallState: { error } }));

            this.toastService.triggerErrorToast('AUTH.STORE.REGISTER_SUMMARY', 'AUTH.STORE.ERROR_MES.REGISTER_DETAIL');

            return EMPTY;
          })
        )
      )
    );
  });
}

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponseInterface, UsersService } from '@backend/users';
import { ToastService } from '@core/services';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { ListResponseInterface } from '@shared/models/list-response.interface';
import { CallState, LoadingState } from '@shared/store';
import { Observable, exhaustMap, tap } from 'rxjs';

export interface EmployeesState {
  listCallState: CallState;
  list: ListResponseInterface<UserResponseInterface> | null;
}

@Injectable()
export class EmployeesStore extends ComponentStore<EmployeesState> {
  public readonly listCallState$: Observable<CallState> = this.select(state => state.listCallState);
  public readonly list$: Observable<ListResponseInterface<UserResponseInterface> | null> = this.select(
    state => state.list
  );
  constructor(
    private usersService: UsersService,
    private toastService: ToastService
  ) {
    super({ listCallState: LoadingState.INIT, list: null });
  }

  public readonly clearState = this.updater((): EmployeesState => ({ listCallState: LoadingState.INIT, list: null }));

  public readonly getEmployeesList = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() =>
        this.patchState((state: EmployeesState): EmployeesState => ({ ...state, listCallState: LoadingState.LOADING }))
      ),
      exhaustMap(() =>
        this.usersService.getEmployeesList().pipe(
          tapResponse({
            next: Employees =>
              this.patchState((): EmployeesState => ({ listCallState: LoadingState.LOADED, list: Employees })),
            error: (error: HttpErrorResponse) =>
              this.patchState((): EmployeesState => {
                this.toastService.triggerErrorToast(
                  'USERS.STORE.Employees_SUMMARY',
                  'USERS.STORE.ERROR_MES.Employees_LIST'
                );

                return { listCallState: { error }, list: null };
              }),
          })
        )
      )
    )
  );
}

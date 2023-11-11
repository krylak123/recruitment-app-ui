import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCandidateResponseInterface, UsersService } from '@backend/users';
import { ToastService } from '@core/services';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { ListResponseInterface } from '@shared/models/list-response.interface';
import { CallState, LoadingState } from '@shared/store';
import { Observable, exhaustMap, tap } from 'rxjs';

export interface CandidatesState {
  listCallState: CallState;
  list: ListResponseInterface<UserCandidateResponseInterface> | null;
}

@Injectable()
export class CandidatesStore extends ComponentStore<CandidatesState> {
  public readonly listCallState$: Observable<CallState> = this.select(state => state.listCallState);
  public readonly list$: Observable<ListResponseInterface<UserCandidateResponseInterface> | null> = this.select(
    state => state.list
  );
  constructor(
    private usersService: UsersService,
    private toastService: ToastService
  ) {
    super({ listCallState: LoadingState.INIT, list: null });
  }

  public readonly clearState = this.updater((): CandidatesState => ({ listCallState: LoadingState.INIT, list: null }));

  public readonly getCandidatesList = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() =>
        this.patchState(
          (state: CandidatesState): CandidatesState => ({ ...state, listCallState: LoadingState.LOADING })
        )
      ),
      exhaustMap(() =>
        this.usersService.getCandidatesList().pipe(
          tapResponse({
            next: candidates =>
              this.patchState((): CandidatesState => ({ listCallState: LoadingState.LOADED, list: candidates })),
            error: (error: HttpErrorResponse) =>
              this.patchState((): CandidatesState => {
                this.toastService.triggerErrorToast(
                  'USERS.STORE.CANDIDATES_SUMMARY',
                  'USERS.STORE.ERROR_MES.CANDIDATES_LIST'
                );

                return { listCallState: { error }, list: null };
              }),
          })
        )
      )
    )
  );
}

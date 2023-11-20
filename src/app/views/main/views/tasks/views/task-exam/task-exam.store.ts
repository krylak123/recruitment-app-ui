import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExamResponseInterface, ExamsService } from '@backend/exams';
import { ToastService } from '@core/services';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { ListResponseInterface } from '@shared/models/list-response.interface';
import { CallState, LoadingState } from '@shared/store';
import { Observable, exhaustMap, tap } from 'rxjs';

export interface TaskExamState {
  listCallState: CallState;
  list: ListResponseInterface<ExamResponseInterface> | null;
}

@Injectable()
export class TaskExamStore extends ComponentStore<TaskExamState> {
  public readonly listCallState$: Observable<CallState> = this.select(state => state.listCallState);
  public readonly list$: Observable<ListResponseInterface<ExamResponseInterface> | null> = this.select(
    state => state.list
  );
  constructor(
    private examService: ExamsService,
    private toastService: ToastService
  ) {
    super({ listCallState: LoadingState.INIT, list: null });
  }

  public readonly getTaskExamList = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() =>
        this.patchState((state: TaskExamState): TaskExamState => ({ ...state, listCallState: LoadingState.LOADING }))
      ),
      exhaustMap(() =>
        this.examService.getExamList().pipe(
          tapResponse({
            next: exams => this.patchState((): TaskExamState => ({ listCallState: LoadingState.LOADED, list: exams })),
            error: (error: HttpErrorResponse) =>
              this.patchState((): TaskExamState => {
                this.toastService.triggerErrorToast(
                  'USERS.STORE.TASKS_SUMMARY',
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

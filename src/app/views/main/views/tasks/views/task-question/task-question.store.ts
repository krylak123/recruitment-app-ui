import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionCloseResponseInterface, QuestionOpenResponseInterface, QuestionsService } from '@backend/questions';
import { ToastService } from '@core/services';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { ListResponseInterface } from '@shared/models/list-response.interface';
import { CallState, LoadingState } from '@shared/store';
import { Observable, exhaustMap, tap } from 'rxjs';

export interface TaskQuestionState {
  listCloseCallState: CallState;
  listClose: ListResponseInterface<QuestionCloseResponseInterface> | null;
  listOpenCallState: CallState;
  listOpen: ListResponseInterface<QuestionOpenResponseInterface> | null;
}

@Injectable()
export class TaskQuestionStore extends ComponentStore<TaskQuestionState> {
  public readonly listCloseCallState$: Observable<CallState> = this.select(state => state.listCloseCallState);
  public readonly listClose$: Observable<ListResponseInterface<QuestionCloseResponseInterface> | null> = this.select(
    state => state.listClose
  );
  public readonly listOpenCallState$: Observable<CallState> = this.select(state => state.listOpenCallState);
  public readonly listOpen$: Observable<ListResponseInterface<QuestionOpenResponseInterface> | null> = this.select(
    state => state.listOpen
  );
  constructor(
    private examService: QuestionsService,
    private toastService: ToastService
  ) {
    super({
      listCloseCallState: LoadingState.INIT,
      listClose: null,
      listOpenCallState: LoadingState.INIT,
      listOpen: null,
    });
  }

  public readonly getTaskQuestionCloseList = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() =>
        this.patchState(
          (state: TaskQuestionState): TaskQuestionState => ({ ...state, listCloseCallState: LoadingState.LOADING })
        )
      ),
      exhaustMap(() =>
        this.examService.getQuestionCloseList('').pipe(
          tapResponse({
            next: exams =>
              this.patchState(
                (state: TaskQuestionState): TaskQuestionState => ({
                  ...state,
                  listCloseCallState: LoadingState.LOADED,
                  listClose: exams,
                })
              ),
            error: (error: HttpErrorResponse) =>
              this.patchState((state: TaskQuestionState): TaskQuestionState => {
                this.toastService.triggerErrorToast(
                  'QUESTIONS.STORE.QUESTION_CLOSE_SUMMARY',
                  'QUESTIONS.STORE.ERROR_MES.QUESTION_LIST'
                );

                return {
                  ...state,
                  listCloseCallState: { error },
                  listClose: null,
                };
              }),
          })
        )
      )
    )
  );

  public readonly getTaskQuestionOpenList = this.effect<void>(trigger$ =>
    trigger$.pipe(
      tap(() =>
        this.patchState(
          (state: TaskQuestionState): TaskQuestionState => ({ ...state, listOpenCallState: LoadingState.LOADING })
        )
      ),
      exhaustMap(() =>
        this.examService.getQuestionOpenList('').pipe(
          tapResponse({
            next: exams =>
              this.patchState(
                (state: TaskQuestionState): TaskQuestionState => ({
                  ...state,
                  listOpenCallState: LoadingState.LOADED,
                  listOpen: exams,
                })
              ),
            error: (error: HttpErrorResponse) =>
              this.patchState((state: TaskQuestionState): TaskQuestionState => {
                this.toastService.triggerErrorToast(
                  'QUESTIONS.STORE.QUESTION_CLOSE_SUMMARY',
                  'QUESTIONS.STORE.ERROR_MES.QUESTION_LIST'
                );

                return {
                  ...state,
                  listOpenCallState: { error },
                  listOpen: null,
                };
              }),
          })
        )
      )
    )
  );
}

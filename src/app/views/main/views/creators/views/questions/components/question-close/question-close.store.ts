import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionClosePayload, QuestionsService } from '@backend/questions';
import { ToastService } from '@core/services';
import { ComponentStore } from '@ngrx/component-store';
import { CallState, LoadingState } from '@shared/store';
import { EMPTY, Observable, catchError, map, switchMap, tap } from 'rxjs';

export interface QuestionCloseState {
  addCallState: CallState;
}

@Injectable()
export class QuestionCloseStore extends ComponentStore<QuestionCloseState> {
  public readonly addCallState$: Observable<CallState> = this.select(state => state.addCallState);
  constructor(
    private questionsService: QuestionsService,
    private toastService: ToastService
  ) {
    super({ addCallState: LoadingState.INIT });
  }

  public readonly clearState = this.updater(
    (state): QuestionCloseState => ({ ...state, addCallState: LoadingState.INIT })
  );

  public readonly addQuestionClose = this.effect((payload$: Observable<QuestionClosePayload>) => {
    return payload$.pipe(
      tap(() => this.patchState((): QuestionCloseState => ({ addCallState: LoadingState.LOADING }))),
      switchMap(payload =>
        this.questionsService.createCloseQuestion(payload).pipe(
          map(() => {
            this.patchState((): QuestionCloseState => ({ addCallState: LoadingState.LOADED }));

            this.toastService.triggerSuccessToast(
              'QUESTIONS.STORE.QUESTION_CLOSE_SUMMARY',
              'QUESTIONS.STORE.SUCCESS_MES.QUESTION_ADD'
            );
          }),
          catchError((error: HttpErrorResponse) => {
            this.patchState((): QuestionCloseState => ({ addCallState: { error } }));

            this.toastService.triggerErrorToast(
              'QUESTIONS.STORE.QUESTION_CLOSE_SUMMARY',
              'QUESTIONS.STORE.ERROR_MES.QUESTION_ADD'
            );

            return EMPTY;
          })
        )
      )
    );
  });
}

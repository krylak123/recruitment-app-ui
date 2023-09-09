import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionOpenPayload, QuestionsService } from '@backend/questions';
import { ToastService } from '@core/services';
import { ComponentStore } from '@ngrx/component-store';
import { CallState, LoadingState } from '@shared/store';
import { EMPTY, Observable, catchError, map, switchMap, tap } from 'rxjs';

export interface QuestionOpenState {
  addCallState: CallState;
}

@Injectable()
export class QuestionOpenStore extends ComponentStore<QuestionOpenState> {
  public readonly addCallState$: Observable<CallState> = this.select(state => state.addCallState);
  constructor(
    private questionsService: QuestionsService,
    private toastService: ToastService
  ) {
    super({ addCallState: LoadingState.INIT });
  }

  public readonly clearState = this.updater(
    (state): QuestionOpenState => ({ ...state, addCallState: LoadingState.INIT })
  );

  public readonly addQuestionClose = this.effect((payload$: Observable<QuestionOpenPayload>) => {
    return payload$.pipe(
      tap(() => this.patchState((): QuestionOpenState => ({ addCallState: LoadingState.LOADING }))),
      switchMap(payload =>
        this.questionsService.createOpenQuestion(payload).pipe(
          map(() => {
            this.patchState((): QuestionOpenState => ({ addCallState: LoadingState.LOADED }));

            this.toastService.triggerSuccessToast(
              'QUESTIONS.STORE.QUESTION_OPEN_SUMMARY',
              'QUESTIONS.STORE.SUCCESS_MES.QUESTION_ADD'
            );
          }),
          catchError((error: HttpErrorResponse) => {
            this.patchState((): QuestionOpenState => ({ addCallState: { error } }));

            this.toastService.triggerErrorToast(
              'QUESTIONS.STORE.QUESTION_OPEN_SUMMARY',
              'QUESTIONS.STORE.ERROR_MES.QUESTION_ADD'
            );

            return EMPTY;
          })
        )
      )
    );
  });
}

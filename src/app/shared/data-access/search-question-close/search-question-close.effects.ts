import { Injectable } from '@angular/core';
import { QuestionsService } from '@backend/questions';
import { ToastService } from '@core/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { searchQuestionCloseActions } from './search-question-close.actions';

@Injectable()
export class SearchQuestionCloseEffects {
  public search$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchQuestionCloseActions.searchQuestionClose),
      switchMap(({ phrase, expLevel }) =>
        this.service.getQuestionCloseList(phrase, expLevel).pipe(
          map(resultList => searchQuestionCloseActions.searchQuestionCloseSuccess({ resultList })),
          catchError(error => of(searchQuestionCloseActions.searchQuestionCloseFail({ error })))
        )
      )
    );
  });

  public searchFail$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(searchQuestionCloseActions.searchQuestionCloseFail),
        tap(() => {
          this.toastService.triggerErrorToast(
            'QUESTIONS.STORE.QUESTION_CLOSE_SUMMARY',
            'QUESTIONS.STORE.ERROR_MES.QUESTION_LIST'
          );
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private service: QuestionsService,
    private toastService: ToastService
  ) {}
}

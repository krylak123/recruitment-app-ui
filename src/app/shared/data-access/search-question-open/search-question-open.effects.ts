import { Injectable } from '@angular/core';
import { QuestionsService } from '@backend/questions';
import { ToastService } from '@core/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { searchQuestionOpenActions } from './search-question-open.actions';

@Injectable()
export class SearchQuestionOpenEffects {
  public search$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchQuestionOpenActions.searchQuestionOpen),
      switchMap(({ phrase, expLevel }) =>
        this.service.getQuestionOpenList(phrase, expLevel).pipe(
          map(resultList => searchQuestionOpenActions.searchQuestionOpenSuccess({ resultList })),
          catchError(error => of(searchQuestionOpenActions.searchQuestionOpenFail({ error })))
        )
      )
    );
  });

  public searchFail$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(searchQuestionOpenActions.searchQuestionOpenFail),
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

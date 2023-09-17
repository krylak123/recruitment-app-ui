import { HttpErrorResponse } from '@angular/common/http';
import { QuestionCloseResponseInterface } from '@backend/questions';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ExpLevelEnum } from '@shared/enums';

import { sharedDataAccessStorePrefix } from '../shared-data-access.constants';

export const searchQuestionCloseActions = createActionGroup({
  source: sharedDataAccessStorePrefix,
  events: {
    searchQuestionClose: props<{
      phrase: string;
      expLevel?: ExpLevelEnum;
    }>(),
    searchQuestionCloseSuccess: props<{
      resultList: QuestionCloseResponseInterface[];
    }>(),
    searchQuestionCloseFail: props<{
      error: HttpErrorResponse;
    }>(),
    searchQuestionCloseClear: emptyProps(),
  },
});

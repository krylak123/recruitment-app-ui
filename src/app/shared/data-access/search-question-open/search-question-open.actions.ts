import { HttpErrorResponse } from '@angular/common/http';
import { QuestionOpenResponseInterface } from '@backend/questions';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ExpLevelEnum } from '@shared/enums';

import { sharedDataAccessStorePrefix } from '../shared-data-access.constants';

export const searchQuestionOpenActions = createActionGroup({
  source: sharedDataAccessStorePrefix,
  events: {
    searchQuestionOpen: props<{
      phrase: string;
      expLevel?: ExpLevelEnum;
    }>(),
    searchQuestionOpenSuccess: props<{
      resultList: QuestionOpenResponseInterface[];
    }>(),
    searchQuestionOpenFail: props<{
      error: HttpErrorResponse;
    }>(),
    searchQuestionOpenClear: emptyProps(),
  },
});

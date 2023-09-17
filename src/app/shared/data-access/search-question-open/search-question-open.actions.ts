import { HttpErrorResponse } from '@angular/common/http';
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
      resultList: any[];
    }>(),
    searchQuestionOpenFail: props<{
      error: HttpErrorResponse;
    }>(),
    searchQuestionOpenClear: emptyProps(),
  },
});

import { HttpErrorResponse } from '@angular/common/http';
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
      resultList: any[];
    }>(),
    searchQuestionCloseFail: props<{
      error: HttpErrorResponse;
    }>(),
    searchQuestionCloseClear: emptyProps(),
  },
});

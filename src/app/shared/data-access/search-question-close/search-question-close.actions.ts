import { HttpErrorResponse } from '@angular/common/http';
import { QuestionCloseResponseInterface } from '@backend/questions';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ExpLevelEnum } from '@shared/enums';
import { ListResponseInterface } from '@shared/models/list-response.interface';

import { sharedDataAccessStorePrefix } from '../shared-data-access.constants';

export const searchQuestionCloseActions = createActionGroup({
  source: sharedDataAccessStorePrefix,
  events: {
    searchQuestionClose: props<{
      phrase: string;
      expLevel?: ExpLevelEnum;
    }>(),
    searchQuestionCloseSuccess: props<{
      resultList: ListResponseInterface<QuestionCloseResponseInterface>;
    }>(),
    searchQuestionCloseFail: props<{
      error: HttpErrorResponse;
    }>(),
    searchQuestionCloseClear: emptyProps(),
  },
});

import { createSelector } from '@ngrx/store';

import { selectSharedDataAccessState } from '../shared-data-access.selectors';
import { SearchQuestionCloseState } from './search-question-close.reducer';

export const selectSearchQuestionCloseStoreState = createSelector(
  selectSharedDataAccessState,
  state => state.searchQuestionClose
);

export const selectSearchQuestionCloseCallState = createSelector(
  selectSearchQuestionCloseStoreState,
  (state: SearchQuestionCloseState) => state.callState
);
export const selectSearchQuestionCloseResultList = createSelector(
  selectSearchQuestionCloseStoreState,
  (state: SearchQuestionCloseState) => state.resultList
);

import { createSelector } from '@ngrx/store';

import { selectSharedDataAccessState } from '../shared-data-access.selectors';
import { SearchQuestionOpenState } from './search-question-open.reducer';

export const selectSearchQuestionOpenStoreState = createSelector(
  selectSharedDataAccessState,
  state => state.searchQuestionOpen
);

export const selectSearchQuestionOpenCallState = createSelector(
  selectSearchQuestionOpenStoreState,
  (state: SearchQuestionOpenState) => state.callState
);
export const selectSearchQuestionOpenResultList = createSelector(
  selectSearchQuestionOpenStoreState,
  (state: SearchQuestionOpenState) => state.data
);

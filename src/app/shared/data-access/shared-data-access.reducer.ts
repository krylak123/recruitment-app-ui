import { ActionReducerMap } from '@ngrx/store';

import {
  SearchQuestionOpenState,
  searchQuestionOpenReducer,
} from './search-question-open/search-question-open.reducer';

export interface SharedDataAccessState {
  searchQuestionOpen: SearchQuestionOpenState;
}

export const sharedDataAccessReducers: ActionReducerMap<SharedDataAccessState> = {
  searchQuestionOpen: searchQuestionOpenReducer,
};

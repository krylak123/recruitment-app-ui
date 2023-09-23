import { ActionReducerMap } from '@ngrx/store';

import {
  SearchQuestionCloseState,
  searchQuestionCloseReducer,
} from './search-question-close/search-question-close.reducer';
import {
  SearchQuestionOpenState,
  searchQuestionOpenReducer,
} from './search-question-open/search-question-open.reducer';

export interface SharedDataAccessState {
  searchQuestionOpen: SearchQuestionOpenState;
  searchQuestionClose: SearchQuestionCloseState;
}

export const sharedDataAccessReducers: ActionReducerMap<SharedDataAccessState> = {
  searchQuestionOpen: searchQuestionOpenReducer,
  searchQuestionClose: searchQuestionCloseReducer,
};

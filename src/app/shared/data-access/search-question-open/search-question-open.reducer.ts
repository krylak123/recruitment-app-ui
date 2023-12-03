import { QuestionOpenResponseInterface } from '@backend/questions';
import { createReducer, on } from '@ngrx/store';
import { ItemState, LoadingState } from '@shared/store';

import { searchQuestionOpenActions } from './search-question-open.actions';

export interface SearchQuestionOpenState extends ItemState {
  data: QuestionOpenResponseInterface[];
}

const initialState: SearchQuestionOpenState = {
  callState: LoadingState.INIT,
  data: [],
};

export const searchQuestionOpenReducer = createReducer(
  initialState,
  on(
    searchQuestionOpenActions.searchQuestionOpen,
    (state): SearchQuestionOpenState => ({
      ...state,
      callState: LoadingState.LOADING,
    })
  ),
  on(
    searchQuestionOpenActions.searchQuestionOpenSuccess,
    (state, { resultList }): SearchQuestionOpenState => ({
      ...state,
      data: resultList.data,
      callState: LoadingState.LOADED,
    })
  ),
  on(
    searchQuestionOpenActions.searchQuestionOpenFail,
    (state, { error }): SearchQuestionOpenState => ({
      ...state,
      callState: { error },
    })
  ),
  on(
    searchQuestionOpenActions.searchQuestionOpenClear,
    (): SearchQuestionOpenState => ({
      ...initialState,
    })
  )
);

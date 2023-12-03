import { QuestionCloseResponseInterface } from '@backend/questions';
import { createReducer, on } from '@ngrx/store';
import { ItemState, LoadingState } from '@shared/store';

import { searchQuestionCloseActions } from './search-question-close.actions';

export interface SearchQuestionCloseState extends ItemState {
  data: QuestionCloseResponseInterface[];
}

const initialState: SearchQuestionCloseState = {
  callState: LoadingState.INIT,
  data: [],
};

export const searchQuestionCloseReducer = createReducer(
  initialState,
  on(
    searchQuestionCloseActions.searchQuestionClose,
    (state): SearchQuestionCloseState => ({
      ...state,
      callState: LoadingState.LOADING,
    })
  ),
  on(
    searchQuestionCloseActions.searchQuestionCloseSuccess,
    (state, { resultList }): SearchQuestionCloseState => ({
      ...state,
      data: resultList.data,
      callState: LoadingState.LOADED,
    })
  ),
  on(
    searchQuestionCloseActions.searchQuestionCloseFail,
    (state, { error }): SearchQuestionCloseState => ({
      ...state,
      callState: { error },
    })
  ),
  on(
    searchQuestionCloseActions.searchQuestionCloseClear,
    (): SearchQuestionCloseState => ({
      ...initialState,
    })
  )
);

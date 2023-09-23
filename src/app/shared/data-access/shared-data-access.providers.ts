import { EnvironmentProviders } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { SearchQuestionCloseEffects } from './search-question-close/search-question-close.effects';
import { SearchQuestionOpenEffects } from './search-question-open/search-question-open.effects';
import { sharedDataAccessFeatureKey } from './shared-data-access.constants';
import { sharedDataAccessReducers } from './shared-data-access.reducer';

export const sharedDataAccessProviders: EnvironmentProviders[] = [
  provideState(sharedDataAccessFeatureKey, sharedDataAccessReducers),
  provideEffects([SearchQuestionOpenEffects, SearchQuestionCloseEffects]),
];

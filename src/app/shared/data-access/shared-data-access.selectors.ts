import { createFeatureSelector } from '@ngrx/store';

import { sharedDataAccessFeatureKey } from './shared-data-access.constants';
import { SharedDataAccessState } from './shared-data-access.reducer';

export const selectSharedDataAccessState = createFeatureSelector<SharedDataAccessState>(sharedDataAccessFeatureKey);

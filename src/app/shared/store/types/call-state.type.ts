import { LoadingState } from '../enums/loading-state.enum';
import { ErrorState } from '../interfaces/error-state.interface';

export type CallState = LoadingState | ErrorState;

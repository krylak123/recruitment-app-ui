import { LoadingState } from '../enums/loading-state.enum';
import { CallState } from '../types/call-state.type';

export const someLoaded = (states: CallState[]): boolean => {
  return states.some(state => state === LoadingState.LOADED);
};

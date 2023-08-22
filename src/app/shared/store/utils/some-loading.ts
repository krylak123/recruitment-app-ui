import { CallState, LoadingState } from '@shared/store';

export const someLoaded = (states: CallState[]): boolean => {
  return states.some(state => state === LoadingState.LOADED);
};

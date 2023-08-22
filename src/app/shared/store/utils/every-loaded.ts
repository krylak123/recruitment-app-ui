import { CallState, LoadingState } from '@shared/store';

export const everyLoaded = (states: CallState[]): boolean => {
  return states.every(state => state === LoadingState.LOADED);
};

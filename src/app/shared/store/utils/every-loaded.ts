import { LoadingState } from '../enums/loading-state.enum';
import { CallState } from '../types/call-state.type';

export const everyLoaded = (states: CallState[]): boolean => {
  return states.every(state => state === LoadingState.LOADED);
};

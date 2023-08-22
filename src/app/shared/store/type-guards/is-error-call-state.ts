import { CallState, ErrorState, TypeGuard } from '@shared/store';

export const isErrorCallState: TypeGuard<CallState, ErrorState> = (callState: CallState): callState is ErrorState =>
  // eslint-disable-next-line no-prototype-builtins
  callState.hasOwnProperty('error');

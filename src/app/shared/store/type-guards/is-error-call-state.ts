import { ErrorState } from '../interfaces/error-state.interface';
import { CallState } from '../types/call-state.type';
import { TypeGuard } from '../types/type-guard.type';

export const isErrorCallState: TypeGuard<CallState, ErrorState> = (callState: CallState): callState is ErrorState =>
  // eslint-disable-next-line no-prototype-builtins
  callState.hasOwnProperty('error');

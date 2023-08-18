type DebounceTimeValues = 'SHORT' | 'MEDIUM' | 'LONG';

export const DEBOUNCE_TIME: Record<DebounceTimeValues, number> = {
  SHORT: 200,
  MEDIUM: 500,
  LONG: 1000,
};

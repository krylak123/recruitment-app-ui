const actionTypesCache: Record<string, boolean> = {};

export const uniqueActionType = (label: string): string => {
  if (actionTypesCache[label]) {
    throw new Error(`Action type "${label}" is not unique"`);
  }

  actionTypesCache[label] = true;
  return label;
};

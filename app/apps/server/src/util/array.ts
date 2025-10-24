const normalizeObject = (obj: Record<string, unknown>): string => {
  const orderedKeys = Object.keys(obj).sort();
  const normalizedObj: Record<string, unknown> = {};

  for (const key of orderedKeys) {
    normalizedObj[key] = obj[key];
  }

  return JSON.stringify(normalizedObj);
};

export const arraysEqualIgnoreOrder = (
  arr1: unknown[],
  arr2: unknown[]
): boolean => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  if (arr1.length === 0) {
    return true;
  }

  const set1 = new Set(
    arr1.map((item) => {
      if (typeof item === "object" && item !== null) {
        return normalizeObject(item as Record<string, unknown>);
      }
      return item;
    })
  );

  return arr2.every((item) => {
    if (typeof item === "object" && item !== null) {
      return set1.has(normalizeObject(item as Record<string, unknown>));
    }
    return set1.has(item);
  });
};

export function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

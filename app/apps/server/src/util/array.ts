export const arraysEqualIgnoreOrder = (
  arr1: number[],
  arr2: number[]
): boolean => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const set1 = new Set(arr1);
  return arr2.every((item) => set1.has(item));
};

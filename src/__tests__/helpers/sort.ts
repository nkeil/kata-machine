import { expect } from "@jest/globals";

export function testSort(sortFunction: (arr: number[]) => void) {
  const arr = [9, 3, 7, 4, 69, 420, 42];
  debugger;
  // where is my debugger
  sortFunction(arr);
  expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
}

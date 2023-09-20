import { expect } from "@jest/globals";

export function testSort(sortFunction: (arr: number[]) => void) {
  const arrayTests: Array<{ start: number[]; end: number[] }> = [
    { start: [], end: [] },
    { start: [134234], end: [134234] },
    { start: [9, 3, 7, 4, 69, 420, 42], end: [3, 4, 7, 9, 42, 69, 420] },
    {
      start: [-100, 37, -101, -100, 22, 0, 9],
      end: [-101, -100, -100, 0, 9, 22, 37],
    },
  ];
  for (const { start, end } of arrayTests) {
    debugger;
    sortFunction(start);
    expect(start).toEqual(end);
  }
}

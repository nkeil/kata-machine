import merge_sort from "@code/MergeSort";
import { test, expect } from "@jest/globals";

test("merge-sort", function () {
  const arr = [9, 3, 7, 4, 69, 420, 42];
  merge_sort(arr);
  expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

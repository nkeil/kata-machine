import merge_sort from "@code/MergeSort";
import { test } from "@jest/globals";
import { testSort } from "./helpers/sort";

test("merge-sort", function () {
  testSort(merge_sort);
});

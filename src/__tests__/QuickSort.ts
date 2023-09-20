import quick_sort from "@code/QuickSort";
import { test } from "@jest/globals";
import { testSort } from "./helpers/sort";

test("quick-sort", function () {
  testSort(quick_sort);
});

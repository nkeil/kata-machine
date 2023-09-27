import heap_sort from "@code/HeapSort";
import { test } from "@jest/globals";
import { testSort } from "./helpers/sort";

test("heap-sort", function () {
  testSort(heap_sort);
});

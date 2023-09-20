import insertion_sort from "@code/InsertionSort";
import { test } from "@jest/globals";
import { testSort } from "./helpers/sort";

test("insertion-sort", function () {
  testSort(insertion_sort);
});

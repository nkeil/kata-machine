import bubble_sort from "@code/BubbleSort";
import { test } from "@jest/globals";
import { testSort } from "./helpers/sort";

test("bubble-sort", function () {
  testSort(bubble_sort);
});

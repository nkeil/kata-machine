import ArrayList from "@code/ArrayList";
import { test } from "@jest/globals";
import { test_list } from "./helpers/listTest";

test("array-list", function () {
  const list = new ArrayList<number>(3);
  test_list(list);
});

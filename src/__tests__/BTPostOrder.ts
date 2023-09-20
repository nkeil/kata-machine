import bt_post_order from "@code/BTPostOrder";
import { tree } from "./helpers/tree";
import { test, expect } from "@jest/globals";

test("post order", function () {
  expect(bt_post_order(tree)).toEqual([7, 5, 15, 10, 29, 45, 30, 100, 50, 20]);
});

import bfs from "@code/BTBFS";
import { tree } from "./helpers/tree";
import { test, expect } from "@jest/globals";

test("bt bfs", function () {
  expect(bfs(tree, 45)).toEqual(true);
  expect(bfs(tree, 7)).toEqual(true);
  expect(bfs(tree, 69)).toEqual(false);
});

import dfs from "@code/DFSOnBST";
import { tree } from "./helpers/tree";
import { test, expect } from "@jest/globals";

test("DFS on BST", function () {
  expect(dfs(tree, 45)).toEqual(true);
  expect(dfs(tree, 7)).toEqual(true);
  expect(dfs(tree, 69)).toEqual(false);
});

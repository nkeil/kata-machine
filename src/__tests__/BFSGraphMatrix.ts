import bfs from "@code/BFSGraphMatrix";
import { matrix2 } from "./helpers/graph";
import { test, expect } from "@jest/globals";

test("bfs - graph matrix", function () {
  expect(bfs(matrix2, 0, 6)).toEqual([0, 1, 4, 5, 6]);

  expect(bfs(matrix2, 6, 0)).toEqual(null);
});

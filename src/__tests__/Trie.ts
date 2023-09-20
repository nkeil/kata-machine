import Trie from "@code/Trie";
import { test, expect } from "@jest/globals";

test("Trie", function () {
  const trie = new Trie();
  trie.insert("foo");
  trie.insert("fool");
  trie.insert("foolish");
  trie.insert("bar");

  expect(trie.find("fo").sort()).toEqual(["foo", "fool", "foolish"]);

  trie.delete("fool");

  expect(trie.find("fo").sort()).toEqual(["foo", "foolish"]);
});

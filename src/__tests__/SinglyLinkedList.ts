import SinglyLinkedList from "@code/SinglyLinkedList";
import { test_list } from "./helpers/list";
import { test } from "@jest/globals";

test("linked-list", function () {
  const list = new SinglyLinkedList<number>();
  test_list(list);
});

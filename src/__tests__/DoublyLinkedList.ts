import LinkedList from "@code/DoublyLinkedList";
import { test_list } from "./helpers/listTest";
import { test } from "@jest/globals";

test("DoublyLinkedList", function () {
  const list = new LinkedList<number>();
  test_list(list);
});

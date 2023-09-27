import MinHeap from "@code/MinHeap";
import { test, expect } from "@jest/globals";

test("min heap", function () {
  const heap = new MinHeap();

  expect(heap.length).toEqual(0);

  heap.insert(5);
  expect(heap.peek()).toEqual(5);
  heap.insert(3);
  expect(heap.peek()).toEqual(3);
  heap.insert(69);
  expect(heap.peek()).toEqual(3);
  heap.insert(420);
  expect(heap.peek()).toEqual(3);
  heap.insert(4);
  expect(heap.peek()).toEqual(3);
  heap.insert(1);
  expect(heap.peek()).toEqual(1);
  heap.insert(8);
  expect(heap.peek()).toEqual(1);
  heap.insert(7);
  expect(heap.peek()).toEqual(1);

  expect(heap.length).toEqual(8);
  expect(heap.pop()).toEqual(1);
  expect(heap.peek()).toEqual(3);
  expect(heap.pop()).toEqual(3);
  expect(heap.peek()).toEqual(4);
  expect(heap.pop()).toEqual(4);
  expect(heap.peek()).toEqual(5);
  expect(heap.pop()).toEqual(5);
  expect(heap.peek()).toEqual(7);
  expect(heap.length).toEqual(4);
  expect(heap.pop()).toEqual(7);
  expect(heap.peek()).toEqual(8);
  expect(heap.pop()).toEqual(8);
  expect(heap.peek()).toEqual(69);
  expect(heap.pop()).toEqual(69);
  expect(heap.peek()).toEqual(420);
  expect(heap.pop()).toEqual(420);
  expect(heap.peek()).toEqual(undefined);
  expect(heap.length).toEqual(0);
});

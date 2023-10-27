export default class MinHeap {
  public length: number;
  private heap: number[];

  constructor() {
    this.length = 0;
    this.heap = [];
  }

  private getParent(i: number) {
    return Math.floor((i - 1) / 2);
  }
  private getLeft(i: number) {
    return i * 2 + 1;
  }
  private getRight(i: number) {
    return (i + 1) * 2;
  }

  private heapifyUp(i: number) {
    if (i === 0) return;

    const parent = this.getParent(i);
    if (this.heap[parent] > this.heap[i]) {
      const temp = this.heap[parent];
      this.heap[parent] = this.heap[i];
      this.heap[i] = temp;
      this.heapifyUp(parent);
    }
  }

  private heapifyDown(i: number) {
    if (i >= this.heap.length) return;

    const left = this.getLeft(i);
    const right = this.getRight(i);

    if (this.heap[left] < this.heap[i] && this.heap[left] < this.heap[right]) {
      [this.heap[left], this.heap[i]] = [this.heap[i], this.heap[left]];
      this.heapifyDown(left);
    } else if (
      this.heap[right] < this.heap[i] &&
      this.heap[right] < this.heap[left]
    ) {
      [this.heap[right], this.heap[i]] = [this.heap[i], this.heap[right]];
      this.heapifyDown(right);
    }
  }

  insert(value: number): void {
    this.heap.push(value);
    this.length++;
    this.heapifyUp(this.heap.length - 1);
  }

  pop(): number | undefined {
    const lastElem = this.heap.pop();
    if (lastElem === undefined) return undefined;
    this.length--;
    if (this.heap[0] === undefined) return lastElem;

    const min = this.heap[0];

    this.heap[0] = lastElem;
    this.heapifyDown(0);

    return min;
  }

  peek(): number {
    return this.heap[0];
  }
}

/**
 * What is a heap? A heap, also called a priority queue, is
 * a data structured optimized for the retrieval of either
 * the min or max element in O(1). It can pop off the min/max
 * value in O(logn) time, resulting in the new min/max becoming
 * available for O(1) retrieval.
 *
 * A heap of size N can be constructed in O(nlogn) time. It is
 * stored as an array, but the data structure can be better
 * thought of as a tree. At the root of the tree, you have
 * the min (we'll assume it's a min heap from here on). The only
 * invariant of the data structure is that all child nodes
 * are greater than the parent node.
 */

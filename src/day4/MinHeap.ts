export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.length = 0;
    this.data = [];
  }

  // O(1)
  peek(): number | undefined {
    return this.data[0];
  }

  // O(logN)
  pop(): number | undefined {
    if (this.length === 0) return undefined;

    const out = this.data[0];

    if (this.length === 1) this.data = [];
    else this.data[0] = this.data[this.length - 1];

    this.length--;
    this.heapifyDown(0);

    return out;
  }

  // O(logN)
  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) return;

    const value = this.data[idx];
    const parentIdx = this.parent(idx);
    const parentValue = this.data[parentIdx];

    if (parentValue > value) {
      [this.data[idx], this.data[parentIdx]] = [parentValue, this.data[idx]];
      this.heapifyUp(parentIdx);
    }
  }

  private heapifyDown(idx: number): void {
    if (idx >= this.length) return;

    const leftIdx = this.left(idx);
    const rightIdx = this.right(idx);

    const value = this.data[idx];
    const leftValue = leftIdx >= this.length ? Infinity : this.data[leftIdx];
    const rightValue = rightIdx >= this.length ? Infinity : this.data[rightIdx];

    if (rightValue < leftValue && rightValue < value) {
      [this.data[idx], this.data[rightIdx]] = [rightValue, value];
      this.heapifyDown(rightIdx);
    } else if (leftValue < rightValue && leftValue < value) {
      [this.data[idx], this.data[leftIdx]] = [leftValue, value];
      this.heapifyDown(leftIdx);
    }
  }

  private parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }
  private left(i: number): number {
    return 2 * i + 1;
  }
  private right(i: number) {
    return 2 * i + 2;
  }
}

export default class ArrayList<T> {
  public length: number;
  private array: Array<T>;

  constructor(initialLength = 5) {
    this.length = 0;
    this.array = new Array<T>(initialLength);
  }

  private doubleArrayLength() {
    const newArray = new Array<T>(this.array.length * 2);

    for (let i = 0; i < this.length; ++i) {
      newArray[i] = this.array[i];
    }

    this.array = newArray;
  }

  // Move everything in the range [start, end) right by one
  private shift(start: number, end: number) {
    for (let i = end; i > start; --i) {
      this.array[i] = this.array[i - 1];
    }
  }

  // Move everything in the range [start, end) left by one
  private unshift(start: number, end: number) {
    if (start <= 0) throw new Error("Tried to unshift off the array!");
    for (let i = start; i < end; ++i) {
      this.array[i - 1] = this.array[i];
    }
  }

  // O(N)
  prepend(item: T): void {
    if (this.length >= this.array.length) {
      this.doubleArrayLength();
    }

    this.shift(0, this.length);
    this.array[0] = item;
    this.length++;
  }

  insertAt(item: T, idx: number): void {
    if (this.length >= this.array.length) {
      this.doubleArrayLength();
    }

    this.shift(idx, this.length);
    this.array[idx] = item;
    this.length++;
  }

  append(item: T): void {
    if (this.length >= this.array.length) {
      this.doubleArrayLength();
    }

    this.array[this.length] = item;
    this.length++;
  }

  remove(item: T): T | undefined {
    // Find item index
    let i = 0;
    for (; i < this.length; ++i) {
      if (this.array[i] === item) break;
    }
    if (i === this.length) return undefined;

    let value = this.array[i];
    this.unshift(i + 1, this.length);
    this.length--;
    return value;
  }

  get(idx: number): T | undefined {
    return this.array[idx];
  }

  removeAt(idx: number): T | undefined {
    if (idx < 0 || idx >= this.length) return undefined;
    let value = this.array[idx];
    this.unshift(idx + 1, this.length);
    this.length--;
    return value;
  }
}

interface Node<T> {
  value: T;
  prev?: Node<T>;
}

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const newNode: Node<T> = {
      value: item,
      prev: this.head,
    };
    this.head = newNode;
    ++this.length;
  }

  pop(): T | undefined {
    if (!this.head) return undefined;
    const val = this.head.value;
    this.head = this.head.prev;
    --this.length;
    return val;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

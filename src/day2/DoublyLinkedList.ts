interface Node<T> {
  value: T;
  next?: Node<T>;
  prev?: Node<T>;
}

export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  prepend(item: T): void {
    let newNode: Node<T> = { value: item, next: this.head };
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    if (newNode.next) {
      newNode.next.prev = newNode;
    }
    this.length++;
  }

  insertAt(item: T, idx: number): void {
    if (idx < 0 || idx > this.length) throw new Error("Can't insert there!");

    // Append to end of array
    if (idx === this.length) {
      return this.append(item);
    }

    let currentIndex = 0;
    let currentNode: Node<T> | undefined = this.head;
    while (currentIndex < this.length && currentNode && currentIndex !== idx) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    const newNode: Node<T> = {
      value: item,
      next: currentNode,
      prev: currentNode?.prev,
    };
    if (currentNode?.prev) currentNode.prev.next = newNode;
    if (currentNode) currentNode.prev = newNode;

    this.length++;
  }

  append(item: T): void {
    const newNode: Node<T> = { value: item, prev: this.tail };

    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  remove(item: T): T | undefined {
    let currentIndex = 0;
    let currentNode: Node<T> | undefined = this.head;
    while (
      currentIndex < this.length &&
      currentNode &&
      currentNode.value !== item
    ) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    const removedNode = currentNode;
    if (!removedNode) return undefined;

    if (currentIndex === 0) {
      this.head = this.head?.next;
      if (this.head) this.head.prev = undefined;
      else this.tail = undefined;
    } else {
      if (removedNode.prev) removedNode.prev.next = removedNode.next;
      if (removedNode.next) removedNode.next.prev = removedNode.prev;
    }
    this.length--;
    return removedNode.value;
  }

  get(idx: number): T | undefined {
    let currentIndex = 0;
    let currentNode: Node<T> | undefined = this.head;
    while (currentIndex < this.length && currentNode && currentIndex < idx) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    if (currentIndex === idx) return currentNode?.value;
    return undefined;
  }

  removeAt(idx: number): T | undefined {
    let currentIndex = 0;
    let currentNode: Node<T> | undefined = this.head;
    while (currentIndex < this.length && currentIndex < idx && currentNode) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    const removedNode = currentNode;
    if (!removedNode) return undefined;

    if (currentIndex === 0) {
      this.head = this.head?.next;
      if (this.head) this.head.prev = undefined;
      else this.tail = undefined;
    } else {
      if (removedNode.prev) removedNode.prev.next = removedNode.next;
      if (removedNode.next) removedNode.next.prev = removedNode.prev;
    }
    this.length--;
    return removedNode.value;
  }

  toString() {
    const values = [];
    let currentNode: Node<T> | undefined = this.head;
    while (currentNode !== undefined) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return `[${values.join(", ")}]`;
  }
}

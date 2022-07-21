import { LinkedNode } from '../shared/node';
export class LinkedList<T> {
  private head?: LinkedNode<T> | null = null;
  private tail?: LinkedNode<T> | null = null;
  private _size: number = 0;

  constructor(iterable: Iterable<T> = []) {
    for (const item of iterable) {
      this.add(item);
    }
  }

  public add = (item: T): LinkedList<T> => {
    if (this.isEmpty()) {
      this.head = this.createNode(item);
      this.tail = this.head;
    } else {
      this.addLastOfList(item);
    }
    this._size++;
    return this;
  };

  public get = (index: number): T => this.getNode(index).value;
  public at = (index: number): T => this.atNode(index).value;
  public *items(): Generator<T, void, unknown> {
    let node = this.head;
    while (node) {
      yield node.value;
      node = node.next;
    }
  }
  public isEmpty = (): boolean => !this.head;
  public size = (): number => this._size;

  private createNode = (
    item: T,
    options: { prev?: LinkedNode<T> | null; next?: LinkedNode<T> | null } = { prev: null, next: null }
  ): LinkedNode<T> => {
    return { value: item, prev: options.prev, next: options.next };
  };

  private addLastOfList = (item: T): void => {
    const currentTail = this.tail;
    this.tail = this.createNode(item, { prev: currentTail });
    currentTail!.next = this.tail;
  };

  private getNode = (index: number): LinkedNode<T> => {
    if (this.isIndexOutOfRange(index)) {
      throw Error(`IndexOutOfBoundsException: [${index}]`);
    }
    let count = 0;
    let foundedNode: LinkedNode<T> = this.head!;
    while (true) {
      if (count === index) {
        break;
      }
      foundedNode = foundedNode.next!;
      count++;
    }
    return foundedNode;
  };

  private atNode = (index: number): LinkedNode<T> => {
    const _index = this.indexInvers(index);
    return this.getNode(_index);
  };

  private indexInvers = (index: number) => (index < 0 ? this._size + index : index);

  private isIndexOutOfRange = (index: number): boolean => index < 0 || index > this._size - 1;
}

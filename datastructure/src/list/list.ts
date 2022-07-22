import { LinkedNode } from '../shared/node';
import { Predicator } from '../shared/types';

export const isLinkedList = <T>(value: any): value is LinkedList<T> => {
  if(!value) return false;
  return value instanceof LinkedList<T>;
};


export class LinkedList<T> {
  private head?: LinkedNode<T> | null = null;
  private tail?: LinkedNode<T> | null = null;
  private _size: number = 0;

  constructor(iterable: Iterable<T> = []) {
    for (const item of iterable) {
      this.add(item);
    }
  }

   add = (item: T): LinkedList<T> => {
    if (this.isEmpty()) {
      this.head = this.createNode(item);
      this.tail = this.head;
    } else {
      this.addLastOfList(item);
    }
  
    this._size++;
    return this;
  };

   addAll = (items: Iterable<T>): LinkedList<T> => {
    for (const item of items) {
      this.add(item);
    }
    return this;
  };

   get = (index: number): T => this.getNode(index).value;
   at = (index: number): T => this.atNode(index).value;


   *items(): Generator<T, void, unknown> {
    let node = this.head;
    while (node) {
      yield node.value;
      node = node.next;
    }
  }

   *reverseItems(): Generator<T, void, unknown> {
    let node = this.tail;
    while(node) {
      yield node.value;
      node = node.prev;
    }
  }

   *itemsWithIndex(): Generator<[number, T], void, unknown> {
    let node = this.head;
    let _index = 0;
    while(node) {
      yield [_index, node.value]
      node = node.next;
      _index++;
    }
  }

   find = (predicator: Predicator<T>): T | null => {
    for(const [i, item] of this.itemsWithIndex()) {
      if(predicator(item, i)){
        return item;
      }
    }
    return null;
  }

   filter = (predicator: Predicator<T>): LinkedList<T> => {
    const result = new LinkedList<T>();
    for(const [i, item] of this.itemsWithIndex()) {
      if(predicator(item, i)) {
        result.add(item)
      }
    }
    return result;
  }


   toArray = (): T[] => [...this.items()];
   isEmpty = (): boolean => !this.head;
   size = (): number => this._size;

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



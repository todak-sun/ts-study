export class LinkedNode<T> {
  prev?: LinkedNode<T> | null;
  next?: LinkedNode<T> | null;
  constructor(readonly value: T) {}
}

export class Stack<T> {
  private readonly items: T[];

  constructor(iterable: T[] = []) {
    this.items = [...iterable];
  }

  push = (item: T): void => {
    this.items.push(item);
  };
  pop = (): T | undefined => this.items.pop();
  top = (): T | undefined => this.items.at(-1);
  size = (): number => this.items.length;
  isEmpty = (): boolean => Boolean(this.items.length);
}

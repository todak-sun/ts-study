export interface Predicator<T> {
  (item: T, index?: number, iterable?: T[]): boolean;
}

export interface Comparator<T> {
  (item1: T, item2: T): number;
}

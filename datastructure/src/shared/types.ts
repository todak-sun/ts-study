export interface Predicator<T> {
  (item: T, index?:number, iterable?:T[]): boolean;
}


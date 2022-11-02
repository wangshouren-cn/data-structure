export class ArrayQueue<T> {
  private readonly _array: T[];

  constructor(initialElments: T[] = []) {
    this._array = initialElments;
  }

  enqueue(...x: T[]): void {
    this._array.push(...x);
  }

  dequeue(): T | undefined {
    return this._array.shift();
  }

  getFront(): T | undefined {
    return this._array[0];
  }

  getSize(): number {
    return this._array.length;
  }

  isEmpty(): boolean {
    return this.getSize() === 0;
  }
}

export class ArrayStack<T> {
    private readonly _array: T[];

    constructor(initialElments: T[] = []) {
        this._array = initialElments;
    }

    push(...x: T[]): void {
        this._array.push(...x);
    }

    pop(): T | undefined {
        return this._array.pop();
    }

    peek(): T | undefined {
        return this._array[this._array.length - 1]
    }

    getSize(): number {
        return this._array.length
    }

    isEmpty(): boolean {
        return this.getSize() === 0
    }
}
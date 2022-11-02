import { ArrayQueue } from ".";

test("ArrayQueue", () => {
    const arrayStack = new ArrayQueue();

    expect(arrayStack.isEmpty()).toBe(true);
    expect(arrayStack.getSize()).toBe(0);
    expect(arrayStack.getFront()).toBe(undefined);

    arrayStack.enqueue(0);
    expect(arrayStack.getSize()).toBe(1);
    expect(arrayStack.getFront()).toBe(0);
    expect(arrayStack.isEmpty()).toBe(false);

    arrayStack.dequeue();
    expect(arrayStack.getSize()).toBe(0);
    expect(arrayStack.getFront()).toBe(undefined);
    expect(arrayStack.isEmpty()).toBe(true);
});

test("ArrayQueue with initial elements", () => {
    const arrayStack = new ArrayQueue([1, 2, 3]);

    expect(arrayStack.getSize()).toBe(3);
    expect(arrayStack.getFront()).toBe(1);
    expect(arrayStack.isEmpty()).toBe(false);

    arrayStack.enqueue(4);
    // arrayStack -> 1,2,3,4
    expect(arrayStack.getFront()).toBe(1);
    expect(arrayStack.getSize()).toBe(4);

    arrayStack.dequeue();
    arrayStack.dequeue();
    // arrayStack -> 3,4
    expect(arrayStack.getSize()).toBe(2);
    expect(arrayStack.getFront()).toBe(3);
    expect(arrayStack.isEmpty()).toBe(false);
});

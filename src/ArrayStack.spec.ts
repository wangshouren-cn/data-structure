import { ArrayStack } from ".";

test("ArrayStack", () => {
  const arrayStack = new ArrayStack();

  expect(arrayStack.isEmpty()).toBe(true);
  expect(arrayStack.getSize()).toBe(0);
  expect(arrayStack.peek()).toBe(undefined);

  arrayStack.push(0);
  expect(arrayStack.getSize()).toBe(1);
  expect(arrayStack.peek()).toBe(0);
  expect(arrayStack.isEmpty()).toBe(false);

  arrayStack.pop();
  expect(arrayStack.getSize()).toBe(0);
  expect(arrayStack.peek()).toBe(undefined);
  expect(arrayStack.isEmpty()).toBe(true);
});

test("ArrayStack with initial elements", () => {
  const arrayStack = new ArrayStack([1, 2, 3]);

  expect(arrayStack.getSize()).toBe(3);
  expect(arrayStack.peek()).toBe(3);
  expect(arrayStack.isEmpty()).toBe(false);

  arrayStack.push(0);
  expect(arrayStack.peek()).toBe(0);
  expect(arrayStack.getSize()).toBe(4);

  arrayStack.pop();
  arrayStack.pop();
  expect(arrayStack.getSize()).toBe(2);
  expect(arrayStack.peek()).toBe(2);
  expect(arrayStack.isEmpty()).toBe(false);
});

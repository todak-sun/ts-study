import { Stack } from './stack';

describe(`Stack Test`, () => {
  describe(`Stack.push()`, () => {
    it(`스택에 아이템을 담을 수 있다.`, () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.size()).toBe(1)
    });
  });

  describe(`Stack.pop()`, () => {
    it(`가장 마지막에 넣은 아이템을 순서대로 뱉어낸다.`, () => {
      const stack = new Stack<number>();
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).toBe(3);
      expect(stack.pop()).toBe(2);
      expect(stack.pop()).toBe(1);
    });

    it(`사이즈가 pop을 호출한 수만큼 줄어든다.`, () => {
      const stack = new Stack([1, 2, 3]);
      const reduceSize = 2;
      for (let i = 0; i < reduceSize; i++) {
        stack.pop();
      }
      expect(stack.size()).toBe(1);
    });

    it(`아무것도 존재하지 않을 때, pop을 호출하면 undefined를 반환한다.`, () => {
      const emptyStack = new Stack();
      expect(emptyStack.pop()).toBe(undefined) 
    })

  });

  describe(`Stack.isEmpty()`, () => {
    it(`Stack에 아무것도 넣지 않는다면, true를 반화한다.`, () => {
      const stack = new Stack();
      expect(stack.isEmpty()).toBe(true);
    });
  });
});

import { Stack } from "./stack";

describe(`Stack Test`, () => {

  describe(`Stack.push()`, () => {

    it(`스택에 아이템을 담을 수 있다.`, () => {
      const stack = new Stack();
      stack.push(1)
    })

  })

})
import { LinkedList } from './list';
describe(`LinkedList Test`, () => {
  describe(`LinkedList constructor`, () => {
    it(`기본 생성자를 통해 인스턴스를 생성할 수 있다.`, () => {
      const list = new LinkedList();
      expect(list).toBeDefined();
    });

    it(`초기화시 배열을 넣으면, 배열을 기초로 생성된 LinkedList가 만들어진다`, () => {
      const targetArray = ['안녕하세요', '반갑습니다', 'hello', 'world'];
      const list = new LinkedList(targetArray);

      const expectedArray = [];
      for (const item of list.items()) {
        expectedArray.push(item);
      }
      expect(JSON.stringify(expectedArray)).toBe(JSON.stringify(targetArray));
    });
  });

  describe(`LinkedList.size()`, () => {
    it(`기본 생성자를 통해 생성시, size는 0을 반환한다.`, () => {
      const list = new LinkedList();
      expect(list.size()).toBe(0);
    });
  });

  describe(`LinkedList.add()`, () => {
    it(`아이템을 하나 추가하면 사이즈가 증가한다.`, () => {
      const list = new LinkedList<number>();
      list.add(1);
      expect(list.size()).toBe(1);
    });

    it(`add를 호출하면 자기 자신을 반환한다.`, () => {
      const list = new LinkedList<number>();
      expect(list.add(1)).toBe(list);
    });
  });

  describe(`LinkedList.items()`, () => {
    it(`items()를 통해 iterable하게 데이터를 순회할 수 있다.`, () => {
      const list = new LinkedList();
      list.add(1).add(2).add(3).add(4);

      const result = [];
      for (const item of list.items()) {
        result.push(item);
      }

      expect(JSON.stringify(result)).toBe(JSON.stringify([1, 2, 3, 4]));
    });
  });

  describe(`LinkedList.get(i)`, () => {
    it(`존재하지 않는 인덱스에 접근하려고 하면 에러가 발생한다.`, () => {
      const list = new LinkedList([1, 2, 3]);
      expect(() => {
        list.get(-1);
      }).toThrow(Error);
      expect(() => {
        list.get(3);
      }).toThrow(Error);
    });

    it(`존재하는 인덱스에 접근하면 LinkedNode를 얻을 수 있다.`, () => {
      const list = new LinkedList([1, 2, 3]);
      expect(list.get(2)).toBe(3);
    });
  });

  describe(`LinkedList.at(i)`, () => {
    it(`존재하지 않는 인덱스에 접근하려고 하면 에러가 발생한다.`, () => {
      const list = new LinkedList([1, 2, 3]);
      expect(() => {
        list.get(3);
      }).toThrow(Error);
    });

    it(`음수(negative)로도 인덱스에 접근할 수 있다.`, () => {
      const list = new LinkedList([1, 2, 3, 4, 5]);
      expect(list.at(-1)).toBe(5);
    });

    it(`존재하는 인덱스에 접근하면 LinkedNode를 얻을 수 있다.`, () => {
      const list = new LinkedList([1, 2, 3]);
      expect(list.get(2)).toBe(3);
    });
  });
});

describe(`Route`, () => {
  interface Identity<T> {
    readonly id: T;
  }

  class Route<I, T extends Identity<I>> {
    private readonly nodes: [T, T];
    constructor(left: T, right: T) {
      this.nodes = [left, right];
    }
  }

  class Routes<I, T extends Identity<I>> {
    private readonly locations: T[];
    constructor(locations: Iterable<T> = []) {
      this.locations = [...locations];
    }

    

  }


});

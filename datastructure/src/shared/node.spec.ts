import { LinkedNode } from './node';
describe(`LinkedNode Test`, () => {
  it(`Create New LinkedNode`, () => {
    const value = `안녕하세요`;
    const node = new LinkedNode(value);
    expect(node.value).toBe(value);
  });

  it(`LinkedNode는 이전값, 다음값을 넣거나 뺄 수 있다.`, () => {
    const prev = new LinkedNode(`prev`);
    const current = new LinkedNode(`current`);
    const next = new LinkedNode(`next`);

    current.prev = prev;
    current.next = next;

    expect(current.prev).toBe(prev);
    expect(current.next).toBe(next);
  });
});

describe(`경로 생성 알고리즘 테스트 시작...`, () => {


  class Routes<T> {
    private readonly array: T[];
    constructor(routes: Iterable<T> = []) {
      this.array = [...routes];
    }

    addRoute(locations: [T, T]) {
      const [prev, next] = locations;
      const prevFounded = this.array.findIndex((loc) => loc === prev);
      const nextFounded = this.array.findIndex((loc) => loc === next);
      if (prevFounded !== -1 && nextFounded !== -1) {
        throw new Error('둘다 존재하는데?');
      } else if (prevFounded !== -1) {
        this.array.splice(prevFounded + 1, 0, next);
      } else if (nextFounded !== -1) {
        this.array.splice(nextFounded, 0, prev);
      }
    }

    toJSON() {
      return [...this.array];
    }

    getRoutes() {
      const ret = [];
      for (let i = 0; i < this.array.length - 1; i++) {
        ret.push([this.array[i], this.array[i + 1]]);
      }
      return ret;
    }
  }
  it(`Test`, () => {
    const case1 = new Routes(['서울', '대전', '부산']);
    case1.addRoute(['대전', '대구']);
    expect(JSON.stringify(case1)).toBe(JSON.stringify(['서울', '대전', '대구', '부산']));

    const case2 = new Routes(['서울', '대전', '부산']);
    case2.addRoute(['천안', '대전']);
    expect(JSON.stringify(case2)).toBe(JSON.stringify(['서울', '천안', '대전', '부산']));

    const case3 = new Routes(['서울', '부산']);
    case3.addRoute(['서울', '천안']);
    case3.addRoute(['천안', '대구']);
    expect(JSON.stringify(case3)).toBe(JSON.stringify(['서울', '천안', '대구', '부산']));

    const case4 = new Routes(['대전', '대구']);
    case4.addRoute(['서울', '대전']);
    expect(JSON.stringify(case4)).toBe(JSON.stringify(['서울', '대전', '대구']));

    console.log(JSON.stringify(case4.getRoutes()));
  });
});

import { Tree } from './tree';

describe(`Tree Test`, () => {
  it(`constructor`, () => {
    const tree = new Tree<number>((a, b) => a - b);

    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(4);
    tree.add(-1);

    tree.inOrderTraversal();
  });
});

import { Comparator } from '../shared/types';
export class TreeNode<T> {
  left?: TreeNode<T> | null;
  right?: TreeNode<T> | null;
  constructor(readonly value: T) {}

  toJSON() {
    return {
      value: this.value,
      left: this.left,
      right: this.right,
    };
  }
}

export class Tree<T> {
  private root?: TreeNode<T>;
  private _size: number;
  constructor(private readonly comparator: Comparator<T>, root?: TreeNode<T>) {
    if (root) {
      this.root = root;
      this._size = 1;
    } else {
      this._size = 0;
    }
  }

  size = (): number => this._size;

  add = (item: T) => {
    const node = new TreeNode(item);
    if (this._size === 0) {
      this.root = node;
    } else {
      this.addInternal(this.root, node);
    }
    this._size++;
  };

  inOrderTraversal(): void {
    this.inOrderTraversalInternal(this.root);
  }

  private inOrderTraversalInternal(node: TreeNode<T> | null | undefined): void {
    if (node) {
      this.inOrderTraversalInternal(node.left);
      console.log(node.value);
      this.inOrderTraversalInternal(node.right);
    }
  }

  private addInternal = (parent: TreeNode<T> | null | undefined, child: TreeNode<T>): TreeNode<T> => {
    if (parent === null || parent === undefined) {
      return child;
    }
    const compare = this.comparator(parent.value, child.value);
    if (compare > 0) {
      parent.left = this.addInternal(parent.left, child);
    } else if (compare < 0) {
      parent.right = this.addInternal(parent.right, child);
    } else {
      throw new Error(`같은 값을 넣을 수 없다.`);
    }
    return parent;
  };

  toJSON() {
    return this.root ? { Tree: this.root } : { Tree: 'Empty' };
  }
}

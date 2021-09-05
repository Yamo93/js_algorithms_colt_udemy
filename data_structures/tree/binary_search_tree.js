class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) {
        return;
      }

      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    let current = this.root;
    while (current && value !== current.value) {
      if (value > current.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    return current ?? undefined;
  }

  contains(value) {
    const found = this.search(value);
    return Boolean(found);
  }

  BFS() {
    if (!this.root) {
      return;
    }
    const queue = [];
    const result = [];
    let dequeued;
    queue.push(this.root);
    while (queue.length) {
      dequeued = queue.shift();
      result.push(dequeued);
      if (dequeued.left) queue.push(dequeued.left);
      if (dequeued.right) queue.push(dequeued.right);
    }

    return result;
  }

  DFSPreOrder() {
    if (!this.root) return;

    const result = [];

    function traverse(node) {
        result.push(node);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);        
    }

    traverse(this.root);

    return result;
  }

  DFSPostOrder() {
    if (!this.root) return;

    const result = [];

    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);        
        result.push(node);
    }

    traverse(this.root);

    return result;
  }

  DFSInOrder() {
    if (!this.root) return;

    const result = [];

    function traverse(node) {
        if (node.left) traverse(node.left);
        result.push(node);
        if (node.right) traverse(node.right);        
    }

    traverse(this.root);

    return result;
  }
}

module.exports = BinarySearchTree;

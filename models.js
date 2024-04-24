class LinkedListNode {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

class TreeNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

module.exports = { LinkedListNode, ValuePair, TreeNode };

const { TreeNode } = require("../models");
const { defaultCompare, Compare } = require("../util");

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.root = null;
    this.compareFn = compareFn;
  }

  insert(key) {
    if (this.root == null) {
      this.root = new TreeNode(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new TreeNode(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new TreeNode(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
}

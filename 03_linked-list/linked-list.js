const { Node } = require("../models");
const { defaultEquals } = require("../util");

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) return undefined;
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }
    this.count--;
    return current.element;
  }

  getElementAt(index) {
    if (index < 0 || index > this.count) return undefined;
    let node = this.head;
    for (let i = 0; i < index && node != null; i++) {
      node = node.next;
    }
    return node;
  }
}

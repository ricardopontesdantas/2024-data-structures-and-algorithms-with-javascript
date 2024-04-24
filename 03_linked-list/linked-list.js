const { LinkedListNode } = require("../models");
const { defaultEquals } = require("../util");

class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new LinkedListNode(element);
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

  insert(element, index) {
    if (index < 0 || index > this.count) return false;
    const node = new LinkedListNode(element);
    let current = this.head;
    if (index === 0) {
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      node.next = current;
      previous.next = node;
    }
    this.count++;
    return true;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (this.equalsFn(element, current.element)) return i;
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.isEmpty()) return "";
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) {
      objString += `,${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

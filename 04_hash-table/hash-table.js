const { ValuePair } = require("../models");
const { defaultToString } = require("../util");

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.table = {};
    this.toStrFn = toStrFn;
  }

  loseloseHashCode(key) {
    if (typeof key === "number") return key;
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key == null || value == null) return false;
    const position = this.hashCode(key);
    this.table[position] = new ValuePair(key, value);
    return true;
  }

  get(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      return delete this.table[this.hashCode(key)];
    }
    return false;
  }
}


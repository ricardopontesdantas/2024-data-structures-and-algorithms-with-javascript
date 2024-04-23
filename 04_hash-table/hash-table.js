const { ValuePair } = require("../models");
const { defaultToString } = require("../util");

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.table = {};
    this.toStrFn = toStrFn;
  }

  djb2HashCode(key) {
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = hash * 33 + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  }

  hashCode(key) {
    return this.djb2HashCode(key);
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

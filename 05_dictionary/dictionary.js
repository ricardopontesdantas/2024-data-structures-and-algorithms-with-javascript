const { ValuePair } = require("../models");
const { defaultToString } = require("../util");

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.table = {};
    this.toStrFn = toStrFn;
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  set(key, value) {
    if (key == null || value == null) return false;
    const tableKey = this.toStrFn(key);
    this.table[tableKey] = new ValuePair(key, value);
    return true;
  }

  remove(key) {
    if (!this.hasKey(key)) return false;
    delete this.table[this.toStrFn(key)];
    return true;
  }

  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
}

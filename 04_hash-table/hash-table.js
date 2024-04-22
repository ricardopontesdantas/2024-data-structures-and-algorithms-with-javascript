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

  hashCodeKey(key) {
    return this.loseloseHashCode(key);
  }
}

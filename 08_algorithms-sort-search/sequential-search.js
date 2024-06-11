const { defaultEquals } = require("../util");

const DOES_NOT_EXIST = -1;

function sequentialSearch(array, value, equalsFn = defaultEquals) {
  for (let i = 0; i < array.length; i++) {
    if (equalsFn(value, array[i])) return i;
  }
  return DOES_NOT_EXIST;
}

array = [1, 2, 3, 4, 5];
console.log(sequentialSearch(array, 3));

const {
  defaultCompare,
  createNonSortedArray,
  Compare,
  swap,
} = require("../util");

function selectionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let indexMin;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j;
      }
    }
    if (i !== indexMin) swap(array, i, indexMin);
  }
  return array;
}

const array = createNonSortedArray(10);
console.log(array.join());
selectionSort(array);
console.log(array.join());

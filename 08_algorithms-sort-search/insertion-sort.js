const { defaultCompare, Compare, createNonSortedArray } = require("../util");

function insertionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[i];
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
}

module.exports = insertionSort;

// const array = createNonSortedArray(10);
// console.log(array.join());
// insertionSort(array);
// console.log(array.join());

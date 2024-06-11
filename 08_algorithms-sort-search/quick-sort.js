const {
  defaultCompare,
  Compare,
  swap,
  createNonSortedArray,
} = require("../util");

function quickSort(array, compareFn = defaultCompare) {
  return quick(array, 0, array.length - 1, compareFn);
}

function quick(array, left, right, compareFn) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right, compareFn);
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn);
    }
    if (index < right) {
      quick(array, index, right, compareFn);
    }
  }
  return array;
}

function partition(array, left, right, compareFn) {
  const pivot = array[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (compareFn(array[i], pivot) === Compare.LESS_THAN) i++;
    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) j--;
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

module.exports = quickSort;

// const array = createNonSortedArray(10);
// console.log(array.join());
// quickSort(array);
// console.log(array.join());

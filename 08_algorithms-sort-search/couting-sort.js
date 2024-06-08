const { createNonSortedArray, findMaxValue } = require("../util");

function countingSort(array) {
  if (array.length < 2) return array;
  const maxValue = findMaxValue(array);
  const counts = new Array(maxValue + 1);
  array.forEach((element) => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });
  let sortedIndex = 0;
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i;
      count--;
    }
  });
  return array;
}

const array = createNonSortedArray(10);
console.log(array.join());
countingSort(array);
console.log(array.join());

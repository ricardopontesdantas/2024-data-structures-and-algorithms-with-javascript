const { swap } = require("../util");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    swap(array, i, randomIndex);
  }
  return array;
}

const array = [1, 2, 3, 4, 5];
console.log(shuffle(array));

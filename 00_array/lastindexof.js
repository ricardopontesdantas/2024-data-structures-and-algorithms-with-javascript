const randomNumbers = [7, 19, 28, 7, 35, 28, 55, 28, 3, 5];
console.log(randomNumbers.lastIndexOf(28)); // 7
console.log(randomNumbers.lastIndexOf(99)); // -1

const myNumber = 28;
const foundIndexes = [];
let index = randomNumbers.lastIndexOf(myNumber);
while (index !== -1) {
  foundIndexes.push(index);
  index = randomNumbers.lastIndexOf(myNumber, --index);
}
console.log(foundIndexes); // [7, 5, 2]

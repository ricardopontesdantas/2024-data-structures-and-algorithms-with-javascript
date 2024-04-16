const randomNumbers = [7, 19, 28, 7, 35, 28, 55, 28, 3, 5];
console.log(randomNumbers.indexOf(28)); // 2
console.log(randomNumbers.indexOf(99)); // -1

const peter = { name: "Peter", age: 20 };
const mary = { name: "Mary", age: 18 };
const john = { name: "John", age: 25 };
const helen = { name: "Helen", age: 23 };
const people = [];
people.push(peter, mary, john, helen);
console.log(people.indexOf(helen)); // 3
console.log(people.indexOf({ name: "Peter", age: 20 })); // -1

const myNumber = 28;
const foundIndexes = [];
let index = randomNumbers.indexOf(myNumber);
while (index !== -1) {
  foundIndexes.push(index);
  index = randomNumbers.indexOf(myNumber, ++index);
}
console.log(foundIndexes); // [2, 5, 7]

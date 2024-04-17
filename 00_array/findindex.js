const ages = [5, 9, 11, 16, 23, 29, 35, 44, 57];
const multipleOf7 = (number) => number % 7 === 0;
console.log(ages.findIndex(multipleOf7)); // 6

const names = ["Joseph", "Chiara", "Ana", "Richard", "Emma"];
const startsWithA = (name) => name.startsWith("A");
console.log(names.findIndex(startsWithA)); // 2

const users = [
  { name: "Joseph", age: 25 },
  { name: "Chiara", age: 32 },
  { name: "Ana", age: 35 },
  { name: "Richard", age: 40 },
  { name: "Emma", age: 30 },
];
const getUserUnder30 = (user) => user.age < 30;
console.log(users.findIndex(getUserUnder30)); // 0

const ages = [5, 9, 11, 16, 23, 29, 35, 44, 57];
console.log(ages.includes(35)); // true
console.log(ages.includes(24)); // false
console.log(ages.includes(11, 2)); // true
console.log(ages.includes(11, 3)); // false

const names = ["Joseph", "Chiara", "Ana", "Richard", "Emma"];
console.log(names.includes("Ana")); // true
console.log(names.includes("Peter")); // false

const users = [
  { name: "Joseph", age: 25 },
  { name: "Chiara", age: 32 },
  { name: "Ana", age: 35 },
  { name: "Richard", age: 40 },
  { name: "Emma", age: 30 },
];
console.log(users.includes({ name: "Ana", age: 35 })); // false

const peter = { name: "Peter", age: 18 };
users.push(peter);
console.log(users.includes(peter)); // true

const ages = [57, 16, 9, 23, 35, 29, 44, 5, 11];
console.log(ages.sort());
// [ 11, 16, 23, 29, 35, 44,  5, 57,  9 ]

const compareNumberFunction = (a, b) => a - b;
console.log(ages.sort(compareNumberFunction));
// [ 5,  9, 11, 16, 23, 29, 35, 44, 57 ]

const names = ["Joseph", "Chiara", "Ana", "Richard", "Emma"];
console.log(names.sort());
// [ 'Ana', 'Chiara', 'Emma', 'Joseph', 'Richard' ]

const users = [
  { name: "Joseph", age: 25 },
  { name: "Chiara", age: 32 },
  { name: "Ana", age: 35 },
  { name: "Richard", age: 40 },
  { name: "Emma", age: 30 },
];
const compareObjectFunction = (a, b) => a.age - b.age;
console.log(users.sort(compareObjectFunction));
/*
[
  { name: 'Joseph', age: 25 },
  { name: 'Emma', age: 30 },
  { name: 'Chiara', age: 32 },
  { name: 'Ana', age: 35 },
  { name: 'Richard', age: 40 }
]
*/

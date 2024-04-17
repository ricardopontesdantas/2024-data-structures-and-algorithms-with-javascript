const ages = [5, 9, 11, 16, 23, 29, 35, 44, 57];
console.log(ages.join()); // 5,9,11,16,23,29,35,44,57
console.log(ages.join("-")); // 5-9-11-16-23-29-35-44-57

const names = ["Joseph", "Chiara", "Ana", "Richard", "Emma"];
console.log(names.join("")); // JosephChiaraAnaRichardEmma
console.log(names.join(", ")); // Joseph, Chiara, Ana, Richard, Emma

const users = [
  { name: "Joseph", age: 25 },
  { name: "Chiara", age: 32 },
  { name: "Ana", age: 35 },
  { name: "Richard", age: 40 },
  { name: "Emma", age: 30 },
];
console.log(users.join(" | ")); // // [object Object] | [object Object] | [object Object] | [object Object] | [object Object]

const arrayBidimensional = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arrayBidimensional.join(",")); // 1,2,3,4,5,6,7,8,9

const ages = [18, 25, 35, 23, 59, 83, 70, 47, 13];
const sumOfAges = ages.reduce((previous, current) => previous + current, 0);
console.log(sumOfAges); // 373

const watchedMovies = [
  { name: "Interestellar", duration: 169 },
  { name: "The Butterfly Effect", duration: 113 },
  { name: "Joker", duration: 122 },
  { name: "Fight Club", duration: 139 },
  { name: "Deadpool & Wolverine", duration: 130 },
];
const sumOfDurationsInMinutes = watchedMovies.reduce(
  (previous, current) => previous + current.duration,
  0
);
console.log(sumOfDurationsInMinutes); // 673

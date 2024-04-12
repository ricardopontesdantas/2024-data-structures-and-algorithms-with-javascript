const cats = ["Ringo", "Selina", "Meg", "Milk", "Rock", "Marcelino", "Jujuba"];
const catsKeys = cats.keys();
console.log(catsKeys.next());
console.log(catsKeys.next());
console.log(catsKeys.next());
console.log(catsKeys.next());
console.log(catsKeys.next());
console.log(catsKeys.next());
console.log(catsKeys.next());
console.log(catsKeys.next());

const dogs = ["Bolinha", "Riquinha", "Sophie", "Max"];
const dogsKeys = dogs.keys();
for (const key of dogsKeys) {
  console.log(key);
}

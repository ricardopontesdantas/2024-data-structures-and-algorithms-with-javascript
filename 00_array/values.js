const cats = ["Ringo", "Selina", "Meg", "Milk", "Rock", "Marcelino", "Jujuba"];
const catsValues = cats.values();
console.log(catsValues.next());
console.log(catsValues.next());
console.log(catsValues.next());
console.log(catsValues.next());
console.log(catsValues.next());
console.log(catsValues.next());
console.log(catsValues.next());
console.log(catsValues.next());

const dogs = ["Bolinha", "Riquinha", "Sophie", "Max"];
const dogsValues = dogs.values();
for (const value of dogsValues) {
  console.log(value);
}

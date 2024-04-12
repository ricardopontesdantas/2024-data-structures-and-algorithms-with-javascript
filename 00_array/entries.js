const cats = ["Ringo", "Selina", "Meg", "Milk", "Rock", "Marcelino", "Jujuba"];
const catsEntries = cats.entries();
console.log(catsEntries.next());
console.log(catsEntries.next());
console.log(catsEntries.next());
console.log(catsEntries.next());
console.log(catsEntries.next());
console.log(catsEntries.next());
console.log(catsEntries.next());
console.log(catsEntries.next());

const dogs = ["Bolinha", "Riquinha", "Sophie", "Max"];
const dogsEntries = dogs.entries();
for (const entry of dogsEntries) {
  console.log(entry);
}

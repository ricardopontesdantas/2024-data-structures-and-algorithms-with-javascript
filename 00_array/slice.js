const names = ["Joseph", "Chiara", "Ana", "Richard", "Emma"];
console.log(names.slice(1, 3));
// ['Chiara', 'Ana']
console.log(names.slice(2));
// ['Ana', 'Richard', 'Emma']
console.log(names.slice(-2));
// ['Richard', 'Emma']
console.log(names.slice(1, -1));
// ['Chiara', 'Ana', 'Richard']
console.log(names.slice(-3, -1));
// ['Ana', 'Richard']
console.log(names.slice(0));
// ['Joseph', 'Chiara', 'Ana', 'Richard', 'Emma']

const compareAge = (a, b) => (a.age === b.age ? 0 : a.age > b.age ? 1 : -1);
const compareName = (a, b) => a.name.localeCompare(b.name);
const compareType = (a, b) => a.type.localeCompare(b.type);

//console.log(pets.toSorted(compareAge))
console.log([...pets].sort(compareAge)); // this is the same as the line above
console.log(pets);

//const sorted = pets.sort(compareName)
const sorted = pets.sort(compareType);
console.log(sorted);

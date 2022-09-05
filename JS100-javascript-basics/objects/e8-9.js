// // E7 CAR KEYS:
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

let keys = Object.keys(vehicle);
console.log(keys);

//ALTERNATIVE SOLUTION W/ FOR IN LOOP:
// let keys = [];
// for (let prop in vehicle){
//   keys.push(prop)
// }
// console.log(keys);

// E8 Convert an Object to a Nested Array:
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};
let personEntries = Object.entries(person);
// console.log(personEntries);
// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
// ALTERNATIVE FOR IN LOOP OPTION:
let nestedEnteries = [];
for (let prop in person){
  nestedEnteries.push([prop, person[prop]]);
}
console.log(nestedEnteries);

// Expected output:
[['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

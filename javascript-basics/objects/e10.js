//9 ..and Vice Versa:

// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

// MY SOLUTION (SUCCESSFUL fromEntries method)
// const obj = Object.fromEntries(nestedArray);
// console.log(obj);

// // BOOK METHOD:
// let person = {};
// for (let i = 0; i < nestedArray.length; i++){
//   let pair = nestedArray[i];
//   person[pair[0]] = pair[1];
// }
// console.log(person);

//E10 Cloning a Person:
function clone(obj) {
  let newObj = Object.assign({}, obj)
  return newObj;
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

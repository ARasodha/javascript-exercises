// CAPITALIZE WORDS
// let string = 'launch school tech & talk';
// let words = string.split(' ');
// let capitalizedWords = [];
//
// for (let i = 0; i < words.length; i++){
//   let word = words[i];
//
//   capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
// }
// console.log(capitalizedWords.join(' '));

// //GROCERY LIST
// let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
//
// // Your code.
// while (groceryList.length > 0){
//   let remove = groceryList.shift();
//   console.log(remove);
// }
// console.log(groceryList);
// // logs:
// // paprika
// // tofu
// // garlic
// // quinoa
// // carrots
// // broccoli
// // hummus
//
// groceryList; // []

// // Calculate Cat Age:
// function catAge(humanAge){
//   switch(humanAge) {
//     case 0:
//       return 0;
//     case 1:
//       return 15;
//     case 2:
//       return 24;
//     default:
//       return 24 + (humanAge - 2) * 4;
//   }
// }
// console.log(catAge(0));
// console.log(catAge(1));
// console.log(catAge(2));
// console.log(catAge(3));
// console.log(catAge(4));

// ...AND VICE VERSA:
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
let person = {};
for (let i = 0; i < nestedArray.length; i++){
  let pair = nestedArray[i];
  person[pair[0]] = pair[1];
}
console.log(person);



//

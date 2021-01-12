// // 13 QUESTIONS THAT WERE ANSWERED WRONG/ NEED MORE WORK:
// //1 : FUNCTIONS1 - E8 INTERNATIONALIZATION 1:
//   function greet(code){
//     switch (code){
//       case 'en':
//       console.log('Hi!');
//       break;
//       case 'fr':
//       console.log('Salut!');
//       break;
//       case 'pt':
//       console.log('Ola!');
//       break;
//       case 'de':
//       console.log('Hallo!');
//       break;
//       case 'sv':
//       console.log('Hej!');
//       break;
//       case 'af':
//       console.log('Haai!');
//       break;
//       default:
//       console.log('Please end a valid ISO 639-1 language code.');
//     }
//   }
//   greet('en'); // 'Hi!'
//   greet('fr'); // 'Salut!'
//   greet('pt'); // 'Olá!'
//   greet('de'); // 'Hallo!'
//   greet('sv'); // 'Hej!'
//   greet('af'); // 'Haai!'
//
//
// // 2 : FUNCTIONS1 - E9 Locale Part 1:
// function extractLanguage(code){
//   let lang = code.split('_')[0];
//   // console.log(lang);
// }
//
// extractLanguage('en_US.UTF-8');  // 'en'
// extractLanguage('en_GB.UTF-8');  // 'en'
// extractLanguage('ko_KR.UTF-16'); // 'ko'
//
// // 3 : FUNCTIONS1 - E11 INTERNATIONALIZATION 2:
// function greet(lang){
//   switch (lang){
//     case 'en' : return 'Hi!';
//     case 'fr' : return 'Salut!';
//     case 'pt' : return 'Olå!';
//     case 'de' : return 'Hallo!';
//     case 'sv' : return 'Hej!';
//     case 'af' : return 'Haai!';
//   }
// }
//
// function extractRegion(locale){
//   return locale.split('.')[0].split('_')[1];
// }
// function localGreet(code){
//   let lang = extractLanguage(code);
//   let region = extractRegion(code);
//   switch (region){
//     case 'US': return 'Hey!';
//     case 'GB': return 'Hello!';
//     case 'AU': return 'Howdy!';
//     default: return greet(lang);
//   }
// }
// console.log(localGreet('en_US.UTF-8'));
// console.log(localGreet('en_GB.UTF-8'));
// console.log(localGreet('en_AU.UTF-8'));
//
// console.log(localGreet('fr_FR.UTF-8'));
// console.log(localGreet('fr_CA.UTF-8'));
// console.log(localGreet('fr_MA.UTF-8'));
//
//
//
// // 3 : VARAIABLE SCOPE - E1 What's my value? (Part 1):
// console.log(greeting);
// var greeting = 'Hello world!'; // undefined treats it like var greeting;
//
// // 4 : VARIABLE SCOPE - E10 What's my value? (Part 10):
//
// const a = {
//   firstName: 'John',
//   lastName: 'Doe'
// };
//
// function myFunction() {
//   a.firstName = 'Jane';
// }
//
// myFunction();
//
// console.log(a); // Jane Doe // the function call changes the value
// //  of firstName in the object A
//
// // 5 : STRINGS - E8 Blank? Version 2:
// function isBlank(string){
//   return string.trim().length === 0;
// }
// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));  //true
// console.log(isBlank('')); //true
//
// // 6 : STRINGS - E9 Captialize Words:
let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];
for (let i = 0; i < words.length; i++){
  let word = words[i];
  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}
console.log(capitalizedWords.join(' '));
//
// // 7 : ARRAYS - E9 TRAVEL:
// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
//   'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
//   'Marrakesh', 'New York City'];
//
// function contains(location, destinations){
//   for (let i = 0; i < destinations.length; i++){
//     if (destinations[i] === location){
//       return true;
//     }
// }
// return false;
// }
// console.log(contains('Barcelona', destinations));
// console.log(contains('Nashville', destinations));
//
// // E8 : ARRAYS - E11 GROCERY LIST:
// let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
//
// // Your code.
// while (groceryList.length > 0){
//   let checkedItem = groceryList.shift();
//   console.log(checkedItem);
// }
//
// // logs:
// // paprika
// // tofu
// // garlic
// // quinoa
// // carrots
// // broccoli
// // hummus
//
// console.log(groceryList); // []
//
// // E9 : FUNCTIONS2 - E5 Calculate Cat Age:
// function catAge(humanAge){
//   switch (humanAge){
//   case 0: return 0;
//   case 1: return 15;
//   case 2: return 24;
//   default: return 24 + (humanAge - 2) * 4;
//   }
// }
//
// console.log(catAge(0)); // 0
// console.log(catAge(1)); // 15
// console.log(catAge(2)); // 24
// console.log(catAge(3)); // 28
// console.log(catAge(4)); // 32
//
// // E10 : OBJECTS - E5 DOT Notation vs. Bracket Notation:
// // SNIPPET 1:
// let ocean = {};
// let prefix = 'Indian';
//
// ocean.prefix = 'Pacific';
//
// console.log(ocean); // {prefix: 'Pacific'}
//
// SNIPPET 2:
// let ocean = {};
// let prefix = 'Indian';
//
// ocean[prefix] = 'Pacific';
//
// console.log(ocean); // {'Indian': 'Pacific'}
//
// ocean['prefix'] = 'Pacific';
// console.log(ocean);
//
// //
// // E11 : OBJECTS - E6 Is it true?:
// let obj = {
//   num: 42,
//   'property name': 'string value',
//   true: false,
//   fun: function() {
//     console.log('Harr Harr!');
//   },
// };
//
// for (let prop in obj) {
//   if (prop === 'true') {
//     console.log("It's true!");
//   }
// } // true in the if statement needs quotes, keys are strings too
// //
// // E12 : OBJECTS - E9 ...and Vice Versa:
// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
// let object = Object.fromEntries(nestedArray);
// // console.log(object);
//
// let person = {};
// for (let i = 0; i < nestedArray.length; i++){
//   let pair = nestedArray[i];
//   person[pair[0]] = pair[1];
// }
//
// console.log(person);
//
//
//
// // Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// /

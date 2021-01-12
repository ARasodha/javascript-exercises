// console.log(greeting);
//
// var greeting = 'Hello world!';
//
// /// RETURNS UNDEFINED - VAR IS TREATED ABOVE THE CALL LIKE VAR GREETING;
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
// console.log(a); // the a array with the first name being jane
// function isBlank(string){
//   return string.trim('').length === 0;
// }
// console.log(isBlank('mars'));
// console.log(isBlank('  '));
// console.log(isBlank(''));
// //
// isBlank('mars'); // false
// isBlank('  ');   // true
// isBlank('');     // true
//

// let string = 'launch school tech & talk';
// let words = string.split(' ');
// let capitalizedWords = [];
//
// for (let i = 0; i < words.length; i++){
//   let word = words[i];
//   capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
// }
// console.log(capitalizedWords.join(' '));
//
//
//
//
// // function contains (location, desintations){
// //   for (let i = 0; i < desintations.length; i++){
// //     if (desintations[i] === location){
// //       return true;
// //     }
// //   }
// //   return false;
// // }
// // let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
// //   'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
// //   'Marrakesh', 'New York City'];
// // console.log(contains('Barcelona', destinations));
// // console.log(contains('Nashville', destinations));
// //
// let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
//  while (0 < groceryList.length){
//    let removed = groceryList.shift();
//    console.log(removed);
//  }
//  console.log(groceryList);
//
// // Your code.
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
// groceryList; // []

// function catAge(humanAge){
//   switch(humanAge){
//     case 0:
//       return 0;
//     case 1:
//       return 15;
//     case 2:
//       return 24;
//     default:
//       return 24 + (humanAge - 2) * 4;
//   }
// function greet(code){
//   switch (code){
//     case 'en':
//       return 'Hi!';
//     case 'fr':
//       return 'Salut!';
//     case 'pt':
//       return 'Ola!';
//     case 'de':
//       return 'Hallo!';
//     case 'sv':
//       return 'Hej!';
//     case 'af':
//       return 'Haai!';
//   }
// }
//
// console.log(greet('en'));
// console.log(greet('fr'));
// console.log(greet('pt'));
// console.log(greet('de'));
// console.log(greet('sv'));
// console.log(greet('af'));
//
// function extractLanguage(langCode){
//   return langCode.split('_')[0];
// }
// console.log(extractLanguage('en_US.UTF-8'));
// console.log(extractLanguage('en_GB.UTF-8'));
// console.log(extractLanguage('ko_KR.UTF-16'));
// extractLanguage('en_US.UTF-8');  // 'en'
// extractLanguage('en_GB.UTF-8');  // 'en'
// extractLanguage('ko_KR.UTF-16'); // 'ko'
// //
// function extractRegion(locale){
//   return locale.split('.')[0].split('_')[1];
// }
//  function greet(lang){
//   switch (lang){
//     case 'en' : return 'Hi!';
//     case 'fr' : return 'Salut!';
//     case 'pt' : return 'Olå!';
//     case 'de' : return 'Hallo!';
//     case 'sv' : return 'Hej!';
//     case 'af' : return 'Haai!';
//   }
// }
// function localGreet(code){
//   let language = extractLanguage(code);
//   let region = extractRegion(code);
//   switch (region){
//     case 'US':
//       return 'Hey!';
//     case 'GB':
//       return 'Hello!';
//     case 'AU':
//       return 'Howdy';
//     default:
//       return greet(language)
//   }
// }
//
// console.log(localGreet('en_US.UTF-8'));
// console.log(localGreet('en_GB.UTF-8'));
// console.log(localGreet('en_AU.UTF-8'));
//
// console.log(localGreet('fr_FR.UTF-8'));
// console.log(localGreet('fr_CA.UTF-8'));
// console.log(localGreet('fr_MA.UTF-8'));

//SNIPPET 1:
// let ocean = {};
// let prefix = 'Indian';
//
// ocean.prefix = 'Pacific';
//
// console.log(ocean); ///// {prefix: 'Pacific'

//SNIPPET 2:
// let ocean = {};
// let prefix = 'Indian';
//
// ocean[prefix] = 'Pacific';
//
// console.log(ocean); // {Indian: 'Pacific'}
//
//
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
// }
// /// the true word in the if statement needs to be a string
// // not a boolean bc key's in objs are strings even tho
// // in an object they dont have quotes around them.
//
cd ..


















//











































//////

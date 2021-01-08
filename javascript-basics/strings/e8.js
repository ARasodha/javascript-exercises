//E8 Blank? Version 2:
// function isBlank(string){
//   return string.trim().length === 0;
// }
//
// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // true - where as before was false w/o trim
// console.log(isBlank('')); // true
// console.log(i
//

//E9 CAPITALIZE WORDS MY SOLUTION (SUCCESSFULL):
// let string = 'launch school tech & talk';
// function fix(string){
//   return string.charAt(0).toUpperCase() + string.slice(1);
//
// }
// const  caps = string.split(' ').map(fix).join(' ');
//
// console.log(caps); // Launch School Tech & Talk

//BOOK SOLUTION:
// let string = 'launch school tech & talk';
// let words = string.split(' ');
// let capitalizedWords = [];
// for (let i = 0; i < words.length; i++){
//   let word = words[i]
//
//    capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
// }
// console.log(capitalizedWords.join(' '));

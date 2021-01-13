// Extra Practice for easy1 exercise set:
// function computeSum(targetNumber) {
//   let count = 0;
//   for (let num = 0; num <= targetNumber; num++) {
//     count += num;
//   }
//   return count;
// }
//
// function computeProduct(targetNumber) {
//   let count = 1;
//   for (let num = 1; num <= targetNumber; num++) {
//     count *= num;
//   }
//   return count;
// }
//
// console.log('Please enter an integer greater than 0: ');
// let rlSync = require('readline-sync');
// let targetNumber = rlSync.prompt();
// console.log('Enter "s" to compute the sum, or "p" to compute the product.');
// let assignment = rlSync.prompt();
// if (assignment === 's') {
//   let sum = computeSum(targetNumber);
//   console.log(`The sum of the integers between 1 and ${targetNumber} is ${sum}.`);
// } else if (assignment === 'p') {
//   let product = computeProduct(targetNumber);
//   console.log(`The product of the integers between 1 and ${targetNumber} is ${product}.`);
// } else if (targetNumber < 0) {
//   console.log('Error: This number is less than zero.');
// } else if (assignment !== 's' || assignment !== 'p') {
//   console.log('Error: The assignment entered is not "s" or "p".');
// }

//E11 ASCII String Value:

// function asciiValue(string){
//   let count = 0;
//   for (let i = 0; i < string.length; i++){
//     count += string.charCodeAt(i)
//   }
//   return count;
// }
// console.log(asciiValue('Four score'));
// console.log(asciiValue('Launch School'));
// console.log(asciiValue('a'));
// console.log(asciiValue(''));

/// E10 Multiples of 3 and 5:
// function isMultiple(number, divisor){
//   return number % divisor === 0;
// }
//
//
// function multisum(number){
//   let count = 0;
//   for (let num = 1; num <= number; num++){
//     if (isMultiple(num, 3) || isMultiple(num, 5)){
//       count += num;
//     }
//   }
//   return count;
// }
//
// console.log(multisum(3)); // 3
// console.log(multisum(5)); // 8
// console.log(multisum(10)); // 33
// console.log(multisum(1000)); // 234168
//
//
//
//














///

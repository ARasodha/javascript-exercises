// E6 Sum or Product of Consecutive Integers:
// let rlSync = require('readline-sync');
//
// function sumOrProduct() {
//
//   let number = rlSync.question('Please enter an integer greater than 0: ');
//   let sOrP = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product: ');
//   let countS = 0;
//   let countP = 1;
//
//   if (sOrP === 's') {
//     for (let i = 1; i <= number; i++) {
//       countS += i;
//     }
//     return `The sum of the integers between 1 and ${number} is ${countS}.`;
//   } else if (sOrP === 'p'){
//     for (let j = 1; j <= number; j++){
//        countP *= j;
//     }
//     return `The product of the integers between 1 and ${number} is ${countP}.`;
//   } else if (number < 0) {
//     return 'Error: The number is less than 0.'
//   } else if (sOrP !== 's' || sOrP !== 'p'){
//     return 'Error: You did not enter "s" or "p".';
//   }
//
// }
// console.log(sumOrProduct());

//Book Solution:
// function computeSum(targetNum){
//   let count = 0;
//   for (let num = 1; num <= targetNum; num++){
//     count += num;
//   }
//   return count;
// }
//
//
// function computeProduct(targetNum){
//   let count = 1;
//   for (let num = 1; num <= targetNum; num++){
//     count *= num;
//   }
//   return count;
// }
//
// console.log('Please enter an integer greater than 0 :');
// let targetNumber = rlSync.prompt();
// console.log('Enter "s" to compute the sum, or "p" to compute the product: ');
// let operation = rlSync.prompt();
//
// if (operation === 's'){
//   let sum = computeSum(targetNumber);
//   console.log(`The sum of the integers between 1 and ${targetNumber} is ${sum}.`);
// } else if (operation === 'p'){
//     let product = computeProduct(targetNumber);
//     console.log(`The product of the integers between 1 and ${targetNumber} is ${product}.`);
//   } else {
//     console.log('Error: Invalid input.');
//   }


// Further Exploration:
let input = [3, 4, 5];


let val = input.reduce(function(accumulator, value) {
  return accumulator + value;
});
console.log(val);









//

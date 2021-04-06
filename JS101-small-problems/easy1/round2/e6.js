// E6 Sum Or Product:
// My Solution:
const readline = require('readline-sync');

let integer = readline.question('Please enter an integer greater than 0: ');

let sOrP = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');

while (!['s', 'p'].includes(sOrP.toLowerCase())) {
  sOrP = readline.question('Invalid input. Enter "s" or "p": ');
}

if (sOrP.toLowerCase() === 's') {
  let answer = 0;
  for (let num = answer; num <= integer; num++) {
    answer += num;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${answer}.`);
} else if (sOrP.toLowerCase() === 'p') {
  let answer = 1;
  for (let num = answer; num <= integer; num++) {
    answer *= num;
  }
  console.log(`The product of the integers between 1 and ${integer} is ${answer}.`);
} else {
  console.log('Error: Invalid input.');
}

// LS Solution:
// function computeSum(targetNum) {
//   let total = 0;
//   for (let num = 1; num <= targetNum; num += 1) {
//     total += num;
//   }
//
//   return total;
// }
//
// function computeProduct(targetNum) {
//   let total = 0;
//   for (let num = 0; num <= targetNum; num++) {
//     total *= num;
//   }
//
//   return total;
// }
//
// let readline = require('readline-sync');
//
// console.log('Please enter an integer greater than 0:');
// let number = parseInt(readline.prompt(), 10);
//
// console.log('Enter "s" to compute the sum, "p" to compuite the product.');
// let operation = readline.prompt();
//
// if (operation === 's') {
//   let sum computeSum(number);
//   console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
// } else if (operation === 'p') {
//   let product = computeProduct(number);
//   console.log(`The product of the integers between 1 and ${number} is ${product}.`);
// } else {
//   console.log('Oops. Unknown operation.');
// }

//Further exploration:
// const readline = require('readline-sync');
//
// let integers = [1, 2, 3];
//
// let sOrP = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');
//
// while (!['s', 'p'].includes(sOrP.toLowerCase())) {
//   sOrP = readline.question('Invalid input. Enter "s" or "p": ');
// }
//
// if (sOrP.toLowerCase() === 's') {
//   let answer = integers.reduce((accum, val) => accum += val, 0);
//   console.log(`The sum of the integers in ${integers} is ${answer}.`);
// } else if (sOrP.toLowerCase() === 'p') {
//   let answer = integers.reduce((accum, val) => accum *= val, 1);
//   console.log(`The product of the integers in ${integers} is ${answer}.`);
// } else {
//   console.log('Error: Invalid input.');
// }

// E6 Madlibs
// My Solution:
let rlSync = require('readline-sync');

function madlibs() {
  let noun = rlSync.question('Enter noun: ');
  let verb = rlSync.question('Enter verb: ');
  let adjective = rlSync.question('Enter adjective: ');
  let adverb = rlSync.question('Enter adverb: ');
  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}.`);
  console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
  console.log(`The ${noun} ${adverb} ${verb}s ${adjective} Joe's turtle.`);
}
console.log(madlibs());

// Book Solution:
let readlineSync = require("readline-sync");

console.log("Enter a noun:");
let noun = readlineSync.prompt();

console.log("Enter a verb:");
let verb = readlineSync.prompt();

console.log("Enter an adjective:");
let adjective = readlineSync.prompt();

console.log("Enter an adverb:");
let adverb = readlineSync.prompt();

let sentence1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
let sentence2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
let sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);

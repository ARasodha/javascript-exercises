// Exercise 6: Madlibs
/*
input: 
output:
Rules
- madlibs is a simple game where you create a story template with "blanks" for words
- you, or another player, then construct a list of words and place them into the story, creating
an often silly or funny story as a result
- create a simple madlibs game that prompts for a noun, an adverb and an adjective and injects 
them into a story that you create
Examples / Test Cases
- 
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

Console Output:
Do you walk your blue dog quickly? That's hilarious!
Data Structure
- string
Algorithm
- ask the user for a noun, adverb and an adjective and set all the input to lowercase
- interpolate the noun, adverb and adjective into a string
  -"Do you {verb} your {adjective} {noun} {adverb}? That's hilarious!"
*/

let noun = prompt('Enter a noun: ');
let verb = prompt('Enter a verb: ');
let adjective = prompt('Enter an adjective: ');
let adverb = prompt('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious?`);
console.log(`Make sure you ${verb} with your ${adjective} looking ${noun} ${adverb}!`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Mike's tiger.`);
// Exercise 8: Letter Swap
/*
input: string
output: string
Rules
- given a string of words separated by spaces, write a function that swaps the first and last letters
of every word
- you may assume that every words contains at least one letter, and that the string will always
contain at least one word
- you may also assume that each string contains nothing but words and spaces, and there are no 
leading, trailing or repeated spaces
Examples / Test Cases
- Oh what a wonderful day it is => hO thaw a londerfuw yad ti si
- Abcde => ebcdA
- a => a
Data Structure
- array, higher order function use
Algorithm
- split the input string into an array of words
- map over each word and append the first letter of the word to the end of the word without the 
first letter and last letter. Append the last letter the beginning of the word
  - if the word's length is 1, return the word as is 
- return the new array joined back into a sentence
*/
function swap(sentence) {
  return sentence.split(' ').map(word => {
    if (word.length === 1) return word;
    return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
  }).join(' ');

}

// Test Cases
console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
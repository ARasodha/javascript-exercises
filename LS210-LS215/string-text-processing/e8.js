// Exercise 8: How Long Are You
/*
Input: string
Output: array
Rules
- write a function that takes a string as an argument and returns an array that contains every word
form the string, with each word followed by a space and the word's length 
- if the argument is an empty string or if no argument is passed, the function should return an empty
array
Algorithm
- convert the input string into an array of words
- iterate over the array of words and on each round of iteration:
  - create newString and set it to an empty string
  - return the current word concatenated to a space and the number representing the length of the word
- return the new array of words after the loop has terminated
*/

function wordLengths(string) {
  if (string === undefined || string === '') return [];
  return string.split(' ').map(word => `${word} ${word.length}`);
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]
console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]
console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]
console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]
console.log(wordLengths(''));      // []
console.log(wordLengths());        // []
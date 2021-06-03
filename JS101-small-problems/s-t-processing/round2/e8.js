/* E8: How long are you?:
Explicit Requirements:
- Input: string
- Output: array
- return an array with each element being a string (a word) with the length of
the word beside of it (Ex: ['apples 6']);
- if the argument of the string is empty return an empty array

Data Structure
- Array, since we are returning an array

Algorithm
- if the input string equalsu undefined or an empty string return an empty array
- Otherwise;:
- split string into array of words
- iterates of array of words and concat the length of each word to the corresponding
word
- return the array
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

console.log(wordLengths('')); // []
console.log(wordLengths()); // []

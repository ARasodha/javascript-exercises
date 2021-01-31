// E9 Reverse It (Part 1):
// My Solution;
function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

// Buggy Solution:
// function reverseSentence(string) {
//   return string.split('').reverse.join('');
// }

// Buggy Solution Fixed:
// function reverseSentence(string) {
//   return string.split(' ').reverse().join(' ');
// }

reverseSentence(''); // ""
reverseSentence('Hello World'); // "World Hello"
reverseSentence('Reverse these words'); // "words these Reverse"
console.log(reverseSentence(''));
console.log(reverseSentence('Hello World'));
console.log(reverseSentence('Reverse these words'));

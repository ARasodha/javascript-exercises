// Exercise 2: Delete Vowels
/*
Input: array
Output: array
Rules
- write a function that takes an array of strings and returns an array of the same string values
but with all vowels (a,e,i,o,u) removed
Algorithm
- iterate over each string in the input array
  - iterate over each letter of each string and on each round of iteration:
    - check if the current letter is not a vowel, if its not keep it, otherwise remove it
- return the new array
*/
// My Solution:
function removeVowels(array) {
  return array.map(string => {
    return string.split('').map(char => {
      if (/[^aeiou]/i.test(char)) return char;
    }).join('');
  });
}

// Exercise Solution:
function removeVowels(stringArray) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return stringArray.map(string => string.split('').map(char => {
    if (VOWELS.includes(char)) {
      return '';
    } else {
      return char;
    }
  }).join(''));
}
// Test Cases 
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
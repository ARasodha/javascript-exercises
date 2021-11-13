// Exercise 4: Capitalize Words
/*
Input: string
Output: string
Rules
-  write a function that takes a string as an argument and returns that string with the first character
of every word capitalized and all subsequent characters in lowercase
- you may assume that a word in any sequence of non-whitespace characters.
Algorithm
- create a result empty string
- iterate over the characters of the input string, on each round of iteration:
  - if the character is the first character of the word set it to uppercase and add it to result
  - if the character is not the first character of the word, set it to lowercase and add it to the result
- return the result string
*/
// My Solution:
function wordCap(string) {
  return string.split(' ').map(word => {
    return word.split('').map((char, idx) => {

      if (idx === 0 && char ) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    }).join('');
  }).join(' ');
}

// Exercise Solution:
function wordCap(words) {
  return words.split(' ')
              .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}

// Test Cases:
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
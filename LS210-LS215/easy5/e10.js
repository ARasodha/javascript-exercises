// Exercise 10: Reverse It Part 2
/*
input: string
output: string
Rules
- write a function that takes a string argument containing one or more words and returns a new
string containing the words from the string argument
- all five-or-more letter words should have their letters in reverse order
- the string argument will consist of only letters and spaces
- words will be separated by a single space
Examples / Test Cases
- "Professional" => "lonaisseforP"
- "Walk around the block" => "Walk dnuora the kcolb"
- "Launch School" => "hcnuaL loohcS"
Data Structure
- string
Algorithm
- take the input string and split it into an array of words
- iterate through the array of words and on each round of iteration:
  - if the current word is five-or-more letters, reverse its characters and return the word back
  to the array
  - if the current word is less than five characters, return the word as is
- once the loop has terminated, return the array joined with spaces between each word
*/

function reverseWords(string) {
  return string.split(' ').map(word => {
    if (/[a-z]{5,}/gi.test(word)) {
      return word.split('').reverse().join('');
    } else return word;
  }).join(' ');
}

 // Test Cases
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
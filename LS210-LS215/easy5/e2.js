// Exercise 2: Double Char Part 2
/*
input: string
output: string
Rules
- write a function that takes a string, doubles every consonant character in the string, and returns
the result as a new string.
- the function should not double vowels ('a', 'e', 'i', 'o', 'u'), digits, punctuation, or 
whitespace
- don't double and non-alphanumeric characters
Examples / Test Cases
- 'String' => "SSttrrinngg"
- 'Hello-World!' => "HHellllo-WWorrlldd!"
- 'July 4th' => "JJullyy 4tthh"
- '' => ""
Data Structure
- string
Algorithm
- create result empty string 
- iterate over each character in the input string if its not a vowel, or non-alphanumeric character
then append it to the result string
  - if its one of those restricted characters, append it once
- once the loop has terminated, return the result
*/
function doubleConsonants(string) {
  let result = '';
  
  string.split('').forEach(char => {
    if (/[^aeiou\d\W]/i.test(char)) {
      result += `${char}${char}`;
    } else {
      result += char;
    }
  });

  return result;
}

// Test Cases
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
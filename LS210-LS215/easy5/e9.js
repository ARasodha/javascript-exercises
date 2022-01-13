// Exercise 9: Reverse It Part 1
/*
input: string
output: string
Rules
- write a function that takes a string argument and returns a new string containing the words form
 the string argument in reverse order
Examples / Test Cases
- "" => ""
- "Hello World" => "World Hello"
- "words these Reverse"
Data Structure 
- string
Algorithm
- split the string into an array of words, reverse it, join it with a space and return the new
string
*/
function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

// Test Cases
console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
// Exercise 4: Get the Middle Character
/*
input: string
output: string
Rules
- write a function that takes a non-empty string arguments and returns the middle character(s) of
the string
- if the string has an odd length, you should return exactly one character
- if th string has an even length, you should return exactly two characters
Examples / Test Cases
- "I love JavaScript" => "a"
- "Launch School" => " "
- "Launch" => "un"
- "Launchschool" => "hs"
- "x" => "x"
Data Structure
- string
Algorithm
- create half and set it to the input string's length - 1 and divided by half
- if the strings length is odd, slice is at the value of half upto half + 1 and return the new
string
- if the strings length is even, slice it at the value of half upto half + 2 and return the new 
string
*/
function centerOf(string) {
  let half = (string.length - 1) / 2;
  if (string.length % 2 === 1) {
    return string.slice(half, half + 1);
  } else {
    return string.slice(half, half + 2);
  }
}

// Test Cases
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
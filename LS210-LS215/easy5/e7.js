// Exercise 7: Name Swapping
/*
input: string
output: string
Rules
- write a function that takes a string argument consisting of a first name, a space, and a last
name and returns a new string, consisting of the last name, a comma, a space and the first name
Examples / Test Cases
- "Joe Roberts" => "Roberts, Joe"
Data Structure
- string
Algorithm
- create names and initialize it to the input string split by the space
- return a string concatenated with the last name (second index in names), a comma, a space
and the first name (first index in names)
*/
function swapName(fullName) {
  return fullName.split(' ').reverse().join(', ');
}

// Test Cases
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// Further Exploration
function swapName(fullName) {
  let names = fullName.split(' ');
  if (names.length > 2) {
    return names.reverse().slice(0, names.length - 1).join(' ') + ', ' + names[names.length -1];
  } else {
    return names.reverse().join(', ');
  }
}

// FE Test Cases
console.log(swapName('Joe Roberts')); // "Roberts, Joe"
console.log(swapName('Joe Micheal Roberts')); // "Roberts Micheal, Joe"

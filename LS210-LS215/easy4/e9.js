// Exercise 9: How Many
/*
input: array
output: string
Rules 
- write a function that counts the number occurrence of each element in a given array
- once counted, log each element alongside the number of occurrences.
Examples / Test Cases
- ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

Data Structure
- object
Algorithm
- create count empty object
- iterate over input array and on each round of iteration
  - if a key in the object exists with the same name as the current value in the array, increment 
  its value by 1
  - otherwise create a key in that object with the name of the current value and set its value as 1
- create keys and initialize it to the keys from the count object
- iterate over the keys and on each round of iteration log to the console the name of the key
and its value separated by ' => '
*/
function countOccurrences(array) {
  let count = {};
  array.forEach(val => {
    count[val] ? count[val]++ : count[val] = 1;
  });

  let keys = Object.keys(count);
  keys.forEach(key => {
    console.log(`${key} => ${count[key]}`);
  });
}

// Test Case
const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

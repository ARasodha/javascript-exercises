// Exercise 7: Bubble Sort
/*
input: array
output: array
Rules
- bubble sort is one of the simplest sorting algorithms available
- in this exercise, you will create a function that sorts an array using the bubble sort algorithm
- a bubble sort works by making multiple passes (iterations) through an array
- on each pass, the two values of each pair of consecutive elements are compared
- if the first value is greater than the second, the two elements are swapped
- this process is repeated until a complete pass is made without performing any swaps --
at which point the array is completely sorted
- write a function that takes an array as an argument and sorts that array using the bubble sort
algorithm described above
- the sorting should be done "in place" -- that is, the function should mutate the array
- you may assume that the array contains at least two elements
Examples / Test Cases
- 6 2 7 1 4 => Start: compare 6 > 2? Yes
2 6 7 1 4 swap
2 6 7 1 4 => 6 > 7? No (no swap)
2 6 7 1 4 => 7 > 1? Yes 
2 6 1 7 4 => swap
.. and so on until no swaps are made on an iteration through the entire array

Data Structure
- array
Algorithm
- create swapped and set it to true
- create a loop that runs while swapped has the value of true
  - create startingArrString and initialize it to the input array set to a string
  - within the loop that iterates through input array by one to the second last index and on each 
  round of iteration
    - if the if the current value is greater than the next value:
      - create hold and assign it to the value at the next index
      - reassign the value at the current index to the value at the next index
      - reassign the value at the next index to the value of `hold`
    - if the inside loop terminates and startingArrString === array.toString()
      - set swapped to false
*/
// My Solution:
function bubbleSort(array) {
  let swapped = true;
  while (swapped) {
    let startingArrString = array.toString();
    for (let idx = 0; idx < array.length - 1; idx++) {
      if (array[idx] > array[idx + 1]) {
        let hold = array[idx];
        array[idx] = array[idx + 1];
        array[idx + 1] = hold;
      }
    }
    
    if (startingArrString === array.toString()) {
      swapped = false;
    }
  }
}

// Exercise Solution:
function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] <= array[i]) {
        continue;
      }

      swap(array, i - 1, i);
      swapped = true;
    }

    if (!swapped) {
      break;
    }
  }
}

function swap(array, idx1, idx2) {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

// Test Cases
const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
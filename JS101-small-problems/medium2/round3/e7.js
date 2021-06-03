// Ex7 Bubble Sort:
/*
Input: array
Output: array
Rules
- iterate through an array multiple times
- each time checking if the first and second value is in ascending order
from smallest to largest
- if it is continue to the next two, if its not swap the values
- keep going until an entire iteration is made through the entire array
without any swaps made
- return the array

Algorithm
- create variable swap = 1
- create a loop with swap in it
- create a for loop that iterates through the entire input array
  - inside it check if the first index element is greater than the second
    - if it isnt swap the two
    - if it is not continue
- once the outside loop break return the array
*/

function bubbleSort(array) {
  let swap = true;
  while (true) {
    swap = false;
    for (let idx = 1; idx < array.length; idx++) {
      if (array[idx - 1] > array[idx]) {
        [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
        swap = true;
      }
    }
    if (!swap) break;
  }
  return array;
}
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/* E7
Input: array
Output: the same array mutated
Rules:
- compare the first two number in the array, if the first number is greater
than the second number, swap the two values
- continue on to the next two (starting from the second value in the first
comparison)
- repeat process until no swaps are made
- if we iterate through the array and no swaps are made, we are finished sorting
- may assume that the array contains atleast two elements

Data Structure
- array
ex:
1. [6, 2, 7, 1] -- 6 > 2 ? Yes swap
2. [2, 6, 7, 1] -- 6 > 7 ? No swap
3. [2, 6, 7, 1] -- 7 > 1 ? Yes swap
4. [2, 6, 1, 7] -- 2 > 6 ? No swap
5. [2, 6, 1, 7] -- 6 > 1 ? Yes swap
6. [2, 1, 6, 7] -- 6 > 7 ? No swap
7. [2, 1, 6, 7] -- 2 > 1 ? Yes swap
8. [1, 2, 6, 7] -- 2 > 1 ? Yes swap
9. [1, 2, 6, 7] -- 2 > 6 ? No swap
10. [1, 2, 6, 7] -- No more swaps return array

Algorithm
- create a loop
- create `swap` set to false, for everytime a swap is made have it set to true
if no swap is made set it to false
- create a loop within the loop to iterate over each index of the array, comparing
it to the next index - 1, (index must start at 1 for this to work).
- if a swap is made during that iteration, set swap to true, if not leave it to false
- if swap === false break the outer loop and return the array
*/

function bubbleSort(array) {
  while (true) {
    let swap = false;
    for (let idx = 1; idx < array.length; idx++) {
      if (array[idx - 1] <= array[idx]) continue;
      [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
      swap = true;
    }
    if (!swap) break;
  }
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

// E8 Sequence Count:
// My Solution:
function sequence(count, number) {
  let resultArray = [];
  let index = 1;
  let originalNumber = number;

  while (count >= index) {
    resultArray.push(number);
    number += originalNumber;
    index++;
  }

  return resultArray;
}

// LS Solution:
// function sequence(count, startNum) {
//   let result = [];
//   for (let num = 1; num <= count; num++) {
//     result.push(startNum * num);
//   }
//
//   return result;
// }

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

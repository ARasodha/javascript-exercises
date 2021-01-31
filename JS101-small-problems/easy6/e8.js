// E8 Sequence Count:
// My Solution:
function sequence(iterations, number) {
  let holdingArray = [];
  let originalNumber = number;
  for (let idx = iterations; idx > 0; idx--) {
    holdingArray.push(number)
    number = number + originalNumber;
  }
  return holdingArray;
}

// Book Solution:
// function sequence(count, startNum){
//   let result = [];
//   for (let num = 1; num <= count; num++){
//     result.push(num * startNum);
//   }
//   return result;
// }

// sequence(5, 1);          // [1, 2, 3, 4, 5]
// sequence(4, -7);         // [-7, -14, -21, -28]
// sequence(3, 0);          // [0, 0, 0]
// sequence(0, 1000000);    // []
console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 1000000));

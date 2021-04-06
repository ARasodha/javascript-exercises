// E10 Multiples of 3 and 5:
// My Solution:
function multisum(targetNum) {
  let sum = 0;
  for (let num = 1; num <= targetNum; num++) {
    if (num % 5 !== 0 && num % 3 !== 0) continue;
    sum += num;
  }
  return sum;
}

// LS Solution:
// function isMultiple(number, divisor) {
//   return number % divisor === 0;
// }
//
// function multisum(maxValue) {
//   let sum = 0;
//
//   for (let number = 1; number <= maxValue; number += 1) {
//     if (isMultiple(number, 3) || isMultiple(number, 5)) {
//       sum += number;
//     }
//   }
//
//   return sum;
// }
console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));
multisum(3); // 3
multisum(5); // 8
multisum(10); // 33
multisum(1000); // 234168

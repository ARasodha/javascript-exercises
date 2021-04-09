// E7 Running Totals:
function runningTotal(array) {
  let result = [];
  let count = 0;
  for (let idx = 0; idx < array.length; idx++) {
    count += array[idx];
    result.push(count);
  }
  return result;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

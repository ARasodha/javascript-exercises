// E7 Runnng Totals:
//My Solution:
function runningTotal(array) {
  let count = 0;
  let newArray = [];
  array.map(value => {
    count += value;
    newArray.push(count);

  })
  return newArray;
}

// Book Solution:
// function runningTotal(array){
//   let resultArray = [];
//   let sum = 0;
//
//   for (let idx = 0; idx < array.length; idx++){
//     resultArray.push(sum += array[idx]);
//   }
//   return resultArray;
// }

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));

runningTotal([2, 5, 13]); // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]); // [14, 25, 32, 47, 67]
runningTotal([3]); // [3]
runningTotal([]); // []

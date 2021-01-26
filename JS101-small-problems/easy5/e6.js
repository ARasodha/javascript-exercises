// // E6 Multiplicative Average:
// My Solution:
function multiplicativeAverage(array) {
  let count = 1;
  for (let idx = 0; idx < array.length; idx++) {
    count = count * array[idx]
  }
  return String((count / array.length).toFixed(3));
}

console.log(multiplicativeAverage([3, 5])); // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"

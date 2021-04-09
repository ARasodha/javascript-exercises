// E6 Multiplicative Average:
function multiplicativeAverage(array) {
  let grandProductAvg = array.reduce((accum, val) => accum *= val, 1) / array.length;
  return String(grandProductAvg.toFixed(3));
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

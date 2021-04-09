// E10 Array Average:
function average(array) {
  return Math.floor(array.reduce((accum, val) => accum += val, 0) / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40

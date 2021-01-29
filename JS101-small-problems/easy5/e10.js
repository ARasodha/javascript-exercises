// E10 Array Average:
// My Solution:
function average(array) {
  let result = array.reduce((accumulator, value) => {
    return accumulator += value;
  })
  return Math.floor(result / array.length);
}
console.log(average([1, 5, 87, 45, 8, 8])); // 25
console.log(average([9, 47, 23, 95, 16, 52])); // 40

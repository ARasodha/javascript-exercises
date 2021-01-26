// E5 Combine Two Lists:
// My Solution:
function interleave(array1, array2) {
  let result = [];
  for (let idx = 0; idx < array1.length; idx++) {
    result.push(array1[idx], array2[idx]);
  }
  return result;
}
console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"];

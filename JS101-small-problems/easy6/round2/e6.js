// E6 Counting Up:
function sequence(number) {
  let resultArray = [];
  for (let idx = 1; idx <= number; idx++) {
    resultArray.push(idx);
  }
  return resultArray;
}

console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]

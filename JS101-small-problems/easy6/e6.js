// E6 Counting Up:
// My Solution:
function sequence(number) {
  let holdingArray = [];
  for (let idx = 1; idx <= number; idx++) {
    holdingArray.push(idx)
  }
  return holdingArray;
}

// sequence(5);    // [1, 2, 3, 4, 5]
// sequence(3);    // [1, 2, 3]
// sequence(1);    // [1]
console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));

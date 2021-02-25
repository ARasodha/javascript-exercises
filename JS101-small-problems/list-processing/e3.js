// E3 Multiply All Pairs:
function multiplyAllPairs(array1, array2) {
  let result = [];
  for (let idx = 0; idx < array1.length; idx++) {
    for (let jdx = 0; jdx < array2.length; jdx++) {
      result.push(array1[idx] * array2[jdx]);
    }
  }
  return result.sort((a, b) => a - b);
}

// Could also use forEach method:
function multiplyAllPairs(array1, array2) {
  let result = [];
  array1.forEach(number => {
    array2.forEach(num => {
      result.push(number * num);
    })
  })
  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

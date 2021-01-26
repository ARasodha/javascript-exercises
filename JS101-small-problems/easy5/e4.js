// E4 Find the Duplicate:
// My Solution:
function findDup(array) {
  for (let idx = 0; idx <= array.length; idx++) {
    for (let i = idx; i <= array.length; i++) {
      if (idx != i && array[idx] == array[i]) {
        return array[idx];
      }
    }
  }
  return 'No duplicates.';
}

// Book Solution #1:
// function findDup(array){
//   let seen = {};
//
//   for (let idx = 0; idx < array.length; idx++){
//     if(seen[array[idx]]){
//       return array[idx];
//     } else {
//       seen[array[idx]] = true;
//     }
//   }
//   return undefined;
// }

// Book Solution #2:
// function count(array, element) {
//   let count = 0;
//   for (let idx = 0; idx < array.length; idx++) {
//     if (array[idx] === element) {
//       count++;
//     }
//   }
//   return count;
// }
//
// function findDup(array) {
//   return array.find(element => count(array, element) === 2);
// }


console.log(findDup([1, 5, 3, 1])); // 1
console.log(findDup([18, 9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81, 8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84, 1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98, 3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50, 6, 70,
  85, 87, 51, 17, 66, 20, 28, 26, 2, 22,
  40, 23, 71, 62, 73, 32, 43, 24, 4, 56,
  7, 34, 57, 74, 45, 11, 88, 67, 5, 58
])); // 73
console.log(findDup([1, 2, 3, 4])); // No duplicates.

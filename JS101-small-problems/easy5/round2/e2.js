// E2 Combining Arrays:
// My Solution:
// function union(array1, array2) {
//   let result = [];
//
//   for (let idx = 0; idx < array1.length; idx++) {
//     if (!result.includes(array1[idx])) {
//       result.push(array1[idx]);
//     }
//   }
//
//   for (let idx = 0; idx < array2.length; idx++) {
//     if (!result.includes(array2[idx])) {
//       result.push(array2[idx]);
//     }
//   }
//
//   return result;
// }

// LS Solution:
function union(array1, array2) {
  let newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (resultArray.indexOf(value) === -1) {
      resultArray.push(value);
    }
  });
}
console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]

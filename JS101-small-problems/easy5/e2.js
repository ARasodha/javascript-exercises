 // E2 Combining Arrays:
 // My Solution:
 function union(array1, array2) {
   let results = [];
   for (let i = 0; i < array1.length; i++) {
     if (!(results.includes(array1[i]))) {
       results.push(array1[i])
     }
     if (!(results.includes(array2[i]))) {
       results.push(array2[i])
     }
   }
   return results;
 }
 console.log(union([1, 3, 5], [3, 6, 9]));

 // Book Solution #1:
 // function copyNonDupsTo(resultArray, array){
 //   array.forEach(value => {
 //     if (resultArray.indexOf(value) === -1){
 //       resultArray.push(value);
 //     }
 //   })
 // }
 //
 // function union(array1, array2){
 //   let newArray = [];
 //   copyNonDupsTo(newArray, array1);
 //   copyNonDupsTo(newArray, array2);
 //   return newArray;
 // }
 // console.log(union([1, 3, 5, 5], [3, 6, 9, 9]));

 // Book Solution #2:
// function copyNonDupsTo(resultArray, array){
//   array.forEach(value => {
//     if (resultArray.indexOf(value) === -1){
//       resultArray.push(value);
//     }
//   })
// }
// function union(){
//   let results = [];
//   for (let idx = 0; idx < arguments.length; idx++){
//     copyNonDupsTo(results, arguments[idx])
//   }
//   return results;
// }
//
//  console.log(union([1, 3, 5, 5], [3, 6, 9, 9], [3, 4, 5, 6, 6]));
 // union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]

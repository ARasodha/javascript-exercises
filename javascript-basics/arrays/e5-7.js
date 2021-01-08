// //E5 FILTER:
// //MY SOLUTION FILTER (SUCCESSFUL):
// let scores = [96, 47, 113, 89, 100, 102];
// let result = 0;
// scores.filter(score => {
//   if (score >= 100){
//     result++;
//   }
// })
// console.log(result);
//
// //BOOK SOLUTION FOR LOOP:
// let count = 0;
// for (let i = 0; i < scores.length; i += 1) {
//   if (scores[i] >= 100) {
//     count += 1;
//   }
// }
// console.log(count); // 3

//E6 VOCABULARY:
// let vocabulary = [
//   ['happy', 'cheerful', 'merry', 'glad'],
//   ['tired', 'sleepy', 'fatigued', 'drained'],
//   ['excited', 'eager', 'enthused', 'animated']
// ];
//
// for (let i = 0; i < vocabulary.length; i++){
//   for (let j = 0; j < vocabulary[i].length; j++){
//     let vocab = vocabulary[i][j];
//     console.log(vocab);
//   }
// }
//

// //E7 EQUALITY:
// let array1 = [2, 6, 4];
// let array2 = [2, 6, 4];
//
// console.log(array1 === array2); // false (two different memory locations / arrays)

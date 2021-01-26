// E3 Halvsies:
// My Attempt:
// function firstHalfOfArray(array){
//   let firstHalf = []
//   let secondHalf = [];
//   let result = [];
//   for (let idx = 0; idx < array.length/2; idx++){
//     firstHalf.push(array[idx]);
//   }
//   for (let idx = array.length/2; idx < array.length; idx++){
//     secondHalf.push(array[idx])
//   }
//   return firstHalf;
// }
//
// function secondHalfOfArray(array){
//   let secondHalf = [];
//   for (let idx = array.length/2; idx < array.length; idx++){
//     secondHalf.push(array[idx])
//   }
//   return secondHalf;
// }
//
// function halvsies(array){
//   let result = [];
//   let firstHalf = firstHalfOfArray(array);
//   result.push(firstHalf);
//   let secondHalf = secondHalfOfArray(array);
//   result.push(secondHalf);
//   return result;
// }


// Book Solution:
function halvsies(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}

// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]
console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([5]));
console.log(halvsies([]));

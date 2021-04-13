/* E8 Grocery List:
Explicit Requirements
- Input: nested array
- Output: array
- Return an array with the string appearing the same amount of times as the number
in the input
Implicit Requirements (Questions)
- will all the nested arrays have the grocery item at index 0 and the amount at index 1

Data Structure
- Array, we are return an array

Algorithm
1. Create a `result` array for the strings to be in
2. Push grocery item name into the `result` array the number of times as the number specified
3. Repeat step 2 for each nested array in input array
4. return result array


*/
// My Solution:
function buyFruit(array) {
  let result = [];
  for (let idx = 0; idx < array.length; idx++) {
    for (let jdx = 0; jdx < array[idx][1]; jdx++) {
      result.push(array[idx][0]);
    }
  }
  return result;
}
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]


// LS Solution:
// function buyFruit(fruitsList) {
//   return fruitsList.map(fruit => repeat(fruit))
//   .reduce((groceryList, fruit) => groceryList.concat(fruit));
// }
//
// function repeat(fruitAndQuantity){
//   let result = [];
//   let fruit = fruitAndQuantity[0];
//   let quantity = fruitAndQuantity[1];
//
//   for (let num = 0; num < quantity; num += 1) {
//     result.push(fruit);
//   }
//
//   return result;
// }
//
// console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

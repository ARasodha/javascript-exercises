// E8 Odd Lists:
// My Solution:
function oddities(array) {
  return array.filter((el, idx) => idx % 2 === 0);
}

// LS Solution:
// function oddities(array) {
//   let oddElements = [];
//   for (let idx = 0; idx < array.length; idx += 2) {
//     oddElements.push(array[idx]);
//   }
//   return oddElements;
// }

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

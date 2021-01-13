//E8 Odd Lists:
function oddities(array) {
  let odd = [];
  for (let i = 0; i < array.length; i += 2) {
    odd.push(array[i]);
  }
  return odd;
}
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

//Further Exloration:
// function oddities2(array){
//   let odd = [];
//   array.forEach(element => {
//     if (element % 2 === 1){
//       odd.push(element);
//     }
//   })
//   return odd;
// }
// console.log(oddities2([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities2([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities2(["abc", "def"])); // logs ['abc']
// console.log(oddities2([123])); // logs [123]
// console.log(oddities2([])); // logs []

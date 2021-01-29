// E8 List of Digits:
// My Solution:
function digitList(number) {
  number = String(number).split('');
  let numbersArray = [];
  for (let idx = 0; idx < number.length; idx++) {
    let eachNumber = Number(number[idx]);
    numbersArray.push(eachNumber);
  }
  return numbersArray;
}
console.log(digitList(12345)); // [1, 2, 3, 4, 5]
console.log(digitList(7)); // [7]
console.log(digitList(375290)); // [3, 7, 5, 2, 9, 0]
console.log(digitList(444)); // [4, 4, 4]

// Further Exploration:
// function digitList(number){
//   number = String(number).split('');
//   let numbersArray = number.map(value => {
//      return parseInt(value, 10);
//   })
//   return numbersArray;
// }
// console.log(digitList(12345)); // [1, 2, 3, 4, 5]
// console.log(digitList(7)); // [7]
// console.log(digitList(375290)); // [3, 7, 5, 2, 9, 0]
// console.log(digitList(444)); // [4, 4, 4]

// E3 Stringy Strings:
//My Solution:
function stringy(number){
  let one = '1';
  let zero = '0';
  let count = '';
  for (let i = 1; i <= number; i++){
    if (i % 2 === 0){
      count += zero;
    } else {
      count += one;
    }
  }
  return count;
}

//Book Solution:
// function stringy(size){
//   let result = '';
//   for (let i = 0; i < size; i++){
//     let number = ((i % 2 === 0) ? 1 : 0);
//     result += number;
//   }
//   return result;
// }

console.log(stringy(6));  // "101010"
console.log(stringy(9));  // "101010101"
console.log(stringy(4));  // "1010"
console.log(stringy(7));  // "1010101"

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

// E1 Sum of Digits:
// My Solution:
function sum(number) {
  number = String(number).split('');
  let sum = 0;
  number.forEach(num => sum += Number(num));
  return sum;
}

// Book Solution:
// function sum(number){
//   return String(number).split('').reduce((accum, val) => accum += Number(val), 0);
// }
//
console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));

// sum(23);           // 5
// sum(496);          // 19
// sum(123456789);    // 45

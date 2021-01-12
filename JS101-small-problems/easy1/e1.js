// E1 Isn't it Odd?:

//MY SOLUTION:
function isOdd(integer) {
  return (integer % 2 === 1 || integer % 2 === -1);
}

//BOOK SOLUTION W/ Math.abs method:
// function isOdd(number) {
//   return Math.abs(number) % 2 === 1;
// }


console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

//Additional Exploration of Math.abs():
// console.log(Math.abs(1)); //1
// console.log(Math.abs('1')); //1
// console.log(Math.abs(-1)); //1
// console.log(Math.abs('-1')); //1
// console.log(Math.abs(0)); //0
// console.log(Math.abs([])); //0
// console.log(Math.abs({ qux: 1})); //NaN
// console.log(Math.abs({})); //NaN
// console.log(Math.abs([2,3])); //NaN

// E5 Always Return Negative:
// My Solution:
function negative(number) {
  if (Math.sign(number) === 1) {
    return 0 - number;
  } else if (Math.sign(number) === -1) {
    return number;
  } else {
    return -0;
  }
}

// Book Solution:
// function negative(number){
//   return Math.abs(number) * -1;
// }

// Further Exploration (Attempt):
// function negative(number){
//   return  Math.sign(number)? number*-1 : number*1;
// }
console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));
// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0

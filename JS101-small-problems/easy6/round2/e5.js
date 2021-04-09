// E5 Always Return Negative:
// My Solution:
function negative(number) {
  if (String(number)[0] !== '-') {
    return Number('-' + String(number));
  } else {
    return number;
  }
}

// LS Solution:
// function negative(number) {
//   return Math.abs(number) * -1;
// }

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

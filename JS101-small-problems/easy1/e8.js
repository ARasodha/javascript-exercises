// E8 Leap Years (Part 1):
function isLeapYear(year) {
  let decider;

    if (year % 4 === 0 && year % 100 !== 0) {
      decider = true;
    } else if (year % 100 === 0 && year % 400 === 0) {
      decider = true;
    } else {
      decider = false;
    }
    return decider;
}
console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // false
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // false
console.log(isLeapYear(400)); // true


// function isLeapYear(year) {
//   let dividedByFour = (year % 4 === 0);
//   if (dividedByFour) {
//     return dividedByFour;
//   } else if (year % 100 === 0) {
//     return false;
//   } else {
//     return (year % 400 === 0);
//
//   }
// }
//
// console.log(isLeapYear(2016)); // true
// console.log(isLeapYear(2015)); // false
// console.log(isLeapYear(2100)); // false
// console.log(isLeapYear(2400)); // true
// console.log(isLeapYear(240000)); // true
// console.log(isLeapYear(240001)); // false
// console.log(isLeapYear(2000)); // true
// console.log(isLeapYear(1900)); // false
// console.log(isLeapYear(1752)); // true
// console.log(isLeapYear(1700)); // false
// console.log(isLeapYear(1)); // false
// console.log(isLeapYear(100)); // false
// console.log(isLeapYear(400)); // true

// E7 Exclusive Or:
function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  } else {
    return false;
  }
}
console.log(xor(1, 1)); // false
console.log(xor(1, 0)); // true
console.log(xor(1, null)); // true

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);
// console.log('a' ^ false);

// E3 Rotation (Part 3):
function rotateRightmostDigits(number, count) {
  let stringNum = String(number);
  let firstHalf = stringNum.slice(0, stringNum.length - count);
  let secondHalf = stringNum.slice(stringNum.length - count);
  let newString = firstHalf + rotateNum(secondHalf);
  return Number(newString);
}

function rotateNum(string) {
  return string.slice(1) + string[0];
}

function maxRotation(number) {
  let numString = rotateNum(String(number));
  for (let count = numString.length - 1; count >= 2; count--) {
    numString = rotateRightmostDigits(numString, count);
  }
  return Number(numString);
}




console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845

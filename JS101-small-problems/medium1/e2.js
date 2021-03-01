// E2 Rotation (Part 2):
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
console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917

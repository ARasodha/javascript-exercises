// E9 Convert a String to a Number!:
function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }
  let arrayOfDigits = string.split('').map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => value = (10 * value) + digit);
  return value;
}
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

//E10 Covert a Signed Number:
function stringToSignedInteger(string) {
  switch (string[0]) {
    case '+':
      return stringToInteger(string.slice(1, string.length));
    case '-':
      return -stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

//E11 Convert a Number to a String:
function integerToString(number) {
  const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    result = DIGITS[remainder] + result;
  } while (number > 0);
  return result;
}
console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"

// E12 Convert a Signed Number to a String:
function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case +1:
      return `+${integerToString(number)}`;
    case -1:
      return `-${integerToString(-number)}`;
    default:
      return integerToString(number);
  }
}
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

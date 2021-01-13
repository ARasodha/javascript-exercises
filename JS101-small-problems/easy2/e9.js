 // E9 Convert a String to a Number:
function stringToInteger(string){
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
  let arrayOfDigits = string.split('').map(char => (DIGITS[char]));
  let count = 0;
  arrayOfDigits.forEach(digit => (count = (10 * count) + digit));
  return count;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

//Further Exploration:
function hexadecimalToInteger(string){
  
}

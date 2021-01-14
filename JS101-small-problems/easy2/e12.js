// E12 Convert a Signed Number to a String! :

function integerToString(number){
  const DIGITS = [0,1,2,3,4,5,6,7,8,9];
  let result = '';

  let count = number;

  do {
    let remainder = count % 10;
    count = Math.floor(count / 10);

    result = DIGITS[remainder] + result;
  } while (count > 0);

  return result;
}

function signedIntegerToString(number){
  switch (Math.sign(number)){
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(Math.sign(-121));

// E7 Exclusive Or:

function xor(value1, value2){
  return value1 === true || value2 === true;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

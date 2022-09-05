// E10 Multiples of 3 and 5:
function isMultiple(number, divisor){
  return number % divisor === 0;
}

// console.log(isMultiple(4, 2));


function multisum(number){
  let count = 0;
  for (let num = 1; num <= number; num++){
    if (isMultiple(num, 3) || (isMultiple(num, 5))){
      count += num;
    }
  }
  return count;
}

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168

// E11 ASCII String Value:

function asciiValue(string){
  let count = 0;
  for (let i = 0; i < string.length; i++){
    count += string.charCodeAt(i);
  }
  return count;
}
console.log(asciiValue('Four score'));
console.log(asciiValue('Launch School'));
console.log(asciiValue('a'));
console.log(asciiValue(''));

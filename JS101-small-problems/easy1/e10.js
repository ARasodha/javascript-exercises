// E10 Multiples of 3 and 5:
function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;
  for (let num = 1; num <= maxValue; num++){
    if (isMultiple(num, 3) || isMultiple(num, 5)){
        sum += num;
      }
  }
  return sum;
}



console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168

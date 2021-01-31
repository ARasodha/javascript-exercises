// E3 Reverse Number:
// My Solution:
function reverseNumber(number) {
  number = String(number).split('').reverse().join('');
  let result = '';
  for (let idx = 0; idx < number.length; idx++) {
    if (number[idx] !== 0) {
      result += number[idx];
    }
  }
  return Number(number)
}


// Book Solution:
// function reverseNumber(number){
//   let numberStringArray = String(number).split('');
//   let reversedStringedNum = numberStringArray.reverse().join('');
//   return parseInt(reversedStringedNum);
// }

console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(12000));
console.log(reverseNumber(1));

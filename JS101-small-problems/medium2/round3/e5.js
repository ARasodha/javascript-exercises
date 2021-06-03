// Ex5 Next Featured Number Higher than a Given Value:
/*
Input: number
Output: number
Rules
- a featured number --> an odd number that is a multiple of 7 with all of its
digits occuring exactly once each.
  EX: 49 is a featured number but 98 is not (not odd), 97 is not its not a
  multiple of 7 and 133 is not (the digit 3 appears twice)
- take the input integer and return the next featured number greeater than the
integer
- issue an error message if there is no next featured nbumber
- Note: the largest possible featured number is: 9876543201

Algorithm
- create isFeatured helper function that tells us if the number is a multiple
of 7, each digit only appears once and is a odd number
- create a loop
  - incrememnt number by 14 and if the number returns true for 'isFeatured'
  then return the number
- if the loop breaks on its own return the error string
*/
const MAXNUMBER = 9876543201;
function isFeatured(number) {
  let numbers = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
  let numString = String(number);
  numString.split('').forEach(num => {
    numbers[num]++;
  })
  return Object.values(numbers).every(num => num <= 1) && number % 7 === 0 &&
  number % 2 === 1;
}

function featured(number) {
  let nextNum = number;
  while (nextNum <= MAXNUMBER) {
    nextNum += 1;
    if (isFeatured(nextNum)) return nextNum;
  }
  return "There is no possible number that fulfills those requirements.";
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

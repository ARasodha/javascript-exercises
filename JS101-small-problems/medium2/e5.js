// E5 Next Featured Number Higher than a Given Value:
// My Solution (Works but hangs on 6th test case):
function featured(integer) {
  const MAX_VALUE = 9876543201;
  for (let num = integer + 1; num < MAX_VALUE; num += 1) {
    if (isValid(num)) return num;
  }
  return "There is no possible number that fulfills those requirements.";
}


function isValid(number) {
  return numbersOccurOnce(number) && isMultipleOfSevenAndOddNum(number);
}

function numbersOccurOnce(number) {
  let count = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0};
  let stringNum = String(number);
  stringNum.split('').forEach(num => {
    if (Object.keys(count).includes(num)) count[num]++;
  });

  return Object.values(count).every(val => val <= 1);
}

function isMultipleOfSevenAndOddNum(number) {
  return number % 2 === 1 && number % 7 === 0;
}

// Lesson Solution:
function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);
  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum < MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number++;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};
  for (let idx = 0; idx < digits.length; idx++) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }
  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

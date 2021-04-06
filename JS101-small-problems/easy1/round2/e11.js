// E11 ASCII String Value:
function asciiValue(string) {
  let count = 0;
  for (let idx = 0; idx < string.length; idx++) {
    count += string.charCodeAt(idx);
  }

  return count;
}

asciiValue('Four score'); // 984
asciiValue('Launch School'); // 1251
asciiValue('a'); // 97
asciiValue(''); // 0
console.log(asciiValue('Four score'));
console.log(asciiValue('Launch School'));
console.log(asciiValue('a'));
console.log(asciiValue(''));

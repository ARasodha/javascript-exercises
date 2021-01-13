// E11 ASCII String Value:

function asciiValue(string){
  let count = 0;
  for (let i = 0; i < string.length; i++){
    let num = string.charCodeAt(i)
      count += num;
  }
  return count;
}
console.log(asciiValue('Four score'));
console.log(asciiValue('Launch School'));
console.log(asciiValue('a'));
console.log(asciiValue(''));


      // 984
      // 1251
      // 97
      // 0

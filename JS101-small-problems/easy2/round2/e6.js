// E6 The End is Near But Not Here:
function penultimate(string) {
  let stringArray = string.split(' ');
  return stringArray[stringArray.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
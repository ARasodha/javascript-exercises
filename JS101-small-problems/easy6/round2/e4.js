// E4 Get The Middle Character:
// My Solution:
function centerOf(string) {
  let half = (string.length - 1) / 2;
  if ((string.length - 1) % 2 === 0) return string[half];

  return string[Math.floor(half)] + string[Math.ceil(half)];
}

// lS Solution:
// function centerOf(string) {
//   if (string.length % 2 === 1) {
//     let centerIndex = (string.length - 1) / 2;
//     return string[centerIndex];
//   } else {
//     let leftIndex = string.length / 2 - 1;
//     return string.substring(leftIndex, leftIndex + 2)
//   }
// }

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School')); // " "
console.log(centerOf('Launch')); // "un"
console.log(centerOf('Launchschool')); // "hs"
console.log(centerOf('x')); // "x"

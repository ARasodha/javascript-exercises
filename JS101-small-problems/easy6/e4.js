// E4 Get The Middle Character:
// My Solution:
function centerOf(string) {
  let stringArray = string.split('');
  if (stringArray.length % 2 !== 0) {
    let middleIndex = (string.length - 1) / 2;
    return stringArray[middleIndex];
  } else {
    let middleIndex = (string.length) / 2;
    return stringArray[middleIndex - 1] + stringArray[middleIndex];
  }
}
console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));
// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"

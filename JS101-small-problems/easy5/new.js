// Easy5 Extra Practice:
// E3 Halvsies:
// function halvsies(array){
//   let half = Math.ceil(array.length / 2);
//   let firstHalf = array.slice(0, half);
//   let secondHalf = array.slice(half);
//   return [firstHalf, secondHalf];
// }
//
// // halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// // halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// // halvsies([5]);                // [[5], []]
// // halvsies([]);                 // [[], []]
// console.log(halvsies([1, 2, 3, 4]));
// console.log(halvsies([1, 5, 2, 4, 3]));
// console.log(halvsies([5]));
// console.log(halvsies([]));

// // E9 How Many?:
// function countOccurrences(elements){
//   let occurrences = {};
//   for (let idx = 0; idx < elements.length; idx++){
//     occurrences[elements[idx]] = occurrences[elements[idx]] || 0;
//     occurrences[elements[idx]]++;
//   }
//   return formatOccurrences(occurrences);
// }
// function formatOccurrences(occurrences){
//   for (items in occurrences){
//     console.log(items + ' => ' + occurrences[items]);
//   }
// }
// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];
// console.log(countOccurrences(vehicles));


// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

// E11 After Midnight (Part 1):
// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;
//
// function doubleZeroes(number){
//   return number < 10 ? `0${number}` : String(number);
// }
// function formatTime(hours, minutes){
//   return `${doubleZeroes(hours)}:${doubleZeroes(minutes)}`;
// }
// function timeOfDay(deltaTime){
//   if (deltaTime < 0) {
//     deltaTime = (deltaTime % MINUTES_PER_DAY) + MINUTES_PER_DAY;
//   } else {
//     deltaTime = deltaTime % MINUTES_PER_DAY;
//   }
//   let hours = Math.floor(deltaTime / MINUTES_PER_HOUR);
//   let minutes = deltaTime % MINUTES_PER_HOUR;
//   return formatTime(hours, minutes);
// }
// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

// E12 Afte Midnight (Part 2):
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(':').map(num => Number(num));
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let deltaTime = (MINUTES_PER_DAY - afterMidnight(timeStr)) % MINUTES_PER_DAY;
  if (deltaTime === MINUTES_PER_DAY) {
    deltaTime = 0;
  }
  return deltaTime;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

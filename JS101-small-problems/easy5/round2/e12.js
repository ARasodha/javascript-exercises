// E12 After Midnight (Part 2):
/// My Solution:
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function beforeMidnight(time) {
  let nums = time.split(':').map(num => Number(num));
  let hours = nums[0] * MINUTES_PER_HOUR;
  let minutes = nums[1];
  let total = hours + minutes;
  if (total > MINUTES_PER_DAY || total === 0) {
    return 0;
  }

  return MINUTES_PER_DAY - (total);
}

function afterMidnight(time) {
  let nums = time.split(':').map(num => Number(num));
  let hours = nums[0] * MINUTES_PER_HOUR;
  let minutes = nums[1];
  let total = hours + minutes;
  if (total >= MINUTES_PER_DAY || total === 0) {
    return 0;
  }

  return total;
}

// LS Solution:
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_HOUR = 60;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
//
// function afterMidnight(timeStr) {
//   let [hours, minutes] = timeStr.split(':').map(num => Number(num));
//   return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
// }
//
// function beforeMidnight(timeStr) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }
//   return deltaMinutes;
// }

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

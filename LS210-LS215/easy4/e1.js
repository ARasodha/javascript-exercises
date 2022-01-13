// Exercise 1: Cute Angles
/*
input: number
output: string
Rules
- write a function that takes a floating point number representing an angle between 0 and 360
degrees and returns a string representing that angle in degrees, minutes, seconds
- you should use a degree symbol (˚) to represent degrees, a single quote (') to represent 
minutes and a double quote (") to represent seconds
- there are 60 minutes in a degree and 60 seconds in a minute
- note: your results may differ slightly depending on how you round values, but generally should
be within a second or two of the results show
Examples / Test Cases
- 30 => 30°00'00"
- 76.73 => 76°43'48"
  - degrees = 76
  - minutes = 76.73 - 76 = .73 * 60 = 48.8 (48) 
  - seconds = 76.73 - 76 = .73 * 60 = 48.8 - 48 = .8 * 60 = 43
- 254.6 => 254°35'59"
  - degrees = 254
  - minutes = 254.6 - 254 = .6 * 60 = 36
  - seconds = 254.6 - 254 = .6 * 60 = 36 * 0 = 0
- 0 => 0°00'00"
- 360 => 360°00'00" or 0°00'00"
Data Structure
- numbers
Algorithm
- create degrees and initialize it to the input number rounded down
- create minutes and initialize it to the input number subtracted by degrees multiplied by 60 (mins
  per hour) -- round it downm
- create seconds and initialize it to the input number subtracted by degrees and multiplied by 60
  subtracted by minutes and multiplied by 60 (seconds per minute)
- create `padZeros` helper function that takes an input number and if the number is a single digit
it adds a 0 in ront of that number and returns it as a string
- create 'formatDms' that takes in the degrees, padded minutes and padded seconds and return the 
desired final output formatted
*/

function dms(floatDegrees) {
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_MINUTE = 60;
  let degrees = Math.floor(floatDegrees);

  let minutes = Math.floor((floatDegrees - degrees) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (((floatDegrees - degrees) * MINUTES_PER_DEGREE) - minutes) * SECONDS_PER_MINUTE);
 
  return formatDms(degrees, padZeros(minutes), padZeros(seconds));
}

function padZeros(number) {
  return String(number).length > 1 ? String(number) : `0${String(number)}`;
}

function formatDms(degrees, minutes, seconds) {
  return `${degrees}°${minutes}'${seconds}"`;
}

// Test Cases
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
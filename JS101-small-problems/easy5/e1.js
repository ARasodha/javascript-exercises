// E1 Cute Angles:
const DEGREE = '˚'
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) * SECONDS_PER_DEGREE
  )
  return String(degreesInt) + DEGREE + padZeroes(minutes) + '"' + padZeroes(seconds)
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

// TEST
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"

//TEST LOGGED
console.log(dms(30));
console.log(dms(76.73))
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));



// FURTHER EXPLORATION:
// console.log(dms(-1));
// console.log(dms(400));
// console.log(dms(-40));
// console.log(dms(-420));

// dms(-1);   // 359°00'00"
// dms(400);  // 40°00'00"
// dms(-40);  // 320°00'00"
// dms(-420); // 300°00'00"

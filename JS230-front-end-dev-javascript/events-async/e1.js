// E1 Randomizer:
/*
input:
output:
Rules / Requirements
- write a randomizer function that accepts `n` callbacks and each callback at some random point 
in time between now and 2 * n seconds from now
- for instance, the callback provides 5 callbacks, the function should run them all sometime
within 10 seconds
- while running randomizer, should log the elapsed time every, 1,2,3.., 2*n seconds
Examples / Test Cases
-
Data Structure
-
Algorithm
- create callbacks and init to arguments converted to array
- create maxTime and init to callbacks.length * 2
- create number and init to 1
- create interval and init to setInterval, that logs number and increments it by 1
each time, every 1 seconds
- create randomTime and init it to Math.floor Math.random * maxTime
- invoke setTime out for maxTime and in callback
  - create randomIndex and init to Math.floor Math.random * arguments.length
  - invoke the function at the current index
  - splice the current index, 1 element
*/

function randomizer() {
  let callbacks = Array.from(arguments);
  let maxTimeSeconds = callbacks.length * 2;

  let secondsElapsed = 0;
  let timeLogger = setInterval(() => {
    secondsElapsed++;
    console.log(secondsElapsed);

    if (secondsElapsed >= maxTimeSeconds) {
      clearInterval(timeLogger);
    }
  }, 1000);

  callbacks.forEach(callback => {
    let randomTime = Math.floor(Math.random() * maxTimeSeconds * 1000);
    setTimeout(callback, randomTime);
  });
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}


randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6
// 1000 Lights
/*
input: number
output: array
Rules
- you have a bank of switches, numbered from 1 to n
- every switch is connected to exactly one light that is initially off
- you walk down the row of switches and toggle every one of them
- you walk back to the beginning of the row and start another pass
- on this second pass, you toggle switches 2,4,6 and so on.
- on the third pass, you go back to the beginning again, this time toggling swithces 3,6,9 and so on
- you continue to repeat this process until you have gone through n repititions
- write a program that takes one argument -- the total number of switches -- and returns an array
of the lights that are on after n repitions
- can the input number be 1 or less? Will it always be a positive integer?
Examples / Test Cases
- n = 5
Round 1: all lights are on
Round 2: lights 2 and 4 are off; 1, 3, and 5 are on
Round 3: lights 2, 3 and 4 are now off; 1 and 5 are on
Round 4: 2 and 3 are now off; 1, 4 and 5 are on
Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on
OUTPUT: [1, 4]
Data Structure
- array - output switches are are toggled on at the end
- object - to store number of switch and store state
Algorithm
- create createBank helper function that will take an input number of switches needed, and return
and object with the same amount of switches as the input number with their state being false (off)
- create bank and initialize it to the return value of `createBank` helper function
- create num and initialize it to 1
- create loop that increments while num is less than or equal to n
- iterate over the keys from `bank` and on each round of iteration
  - if num % currentKey === 0, set value to opposite (boolean / toggle)
- increment num by 1 on each round of iteration until num is less than or equal to n
- once the outer loop has terminated:
  - obtain keys from bank that have the value true and return them in an array
*/

function createBank(n) {
  let bank = {};

  for (let idx = 1; idx <= n; idx++) {
    bank[idx] = false;
  }

  return bank;
}

function lightsOn(n) {
  let bank = createBank(n);
  let num = 1;
  let switches = Object.keys(bank);
  switches = switches.map((x) => Number(x));

  while (num <= n) {
    for (let idx = 0; idx <= switches.length; idx++) {
      if (switches[idx] % num === 0) {
        bank[switches[idx]] = !bank[switches[idx]];
      }
    }

    num++;
  }

  return switches.filter((x) => bank[x]);
}

// Test Cases
console.log(lightsOn(5)); // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

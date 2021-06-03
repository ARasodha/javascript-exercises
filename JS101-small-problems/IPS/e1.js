// Interpretive Problem Solving
// Ex 1: 1000 Lights
/*
Input: number
Output: array
Rules
- take the input `count`. You have the switches 1 to `count`
- every switch is connected to one light that is initially off
- On the first pass you walk by every one of them and turn them all on
- On the second pass you toggle switches 2, 4, 6 and so on.... Now every other
 light is on
- On the third pass 3, 6 and 9 and so are toggled and so on

// SOLUTION 1:
Algorithm
- Note: pattern noticed: starting from 1, to the number of count... square root
of every number is the switch that ends up being on
- create result empty array
- create switch and set it to 1
- create index and set it to 1
- while result's last value is  <= 100 continue loop
  - push the square root of switch into result
  - increment switch by 1 on each round of iteration
- return result after iteration
*/

function lightsOn(count) {
  let result = [];
  let light = 1;
  do {
    result.push(Math.pow(light, 2));
    light++;
  } while (result[result.length - 1] < count);
  return result;
}

console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/* SOLUTION 2:
Algorithm
- create a switches object {}
- loop from 1 to count, creating placing the light number as the key and 'on'
as the value for each switch

- create light and set it to 1
- loop while light is less than count

- iterate from 1 to count and if the key % light === 0 set it's to the opposite
of what it currently is (on/off)
  - iterate this from 1 to count and after iteration increase count by 1 and
  repeat

- after the outside loop breaks and light is equal to count:
- create global empty result array
- iterate over the object and push any key with the value 'on' to the result array
*/

function lightsOn(count) {
  let switches = {};
  for (let idx = 1; idx <= count; idx++) {
    switches[idx] = 'on';
  }

  let light = 1;
  while (light < count) {
    for (let idx = 1; idx < count; idx++) {
      if (idx % light !== 0) {
        switches[idx] === 'on' ? switches[idx] = 'off' :
          switches[idx] = 'on';
      }
    }
    light++;
  }

  let result = [];
  for (let light in switches) {
    if (switches[light] === 'on') {
      result.push(light);
    }
  }
  return result;
}

console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

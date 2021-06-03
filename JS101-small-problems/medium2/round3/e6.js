// Ex6 Sum Square - Square Sum
/*
Input: number
Output: number
Rules
- write a function that computes the difference between the square of the Sum
of the first count positive integers and the sum of the squares of the first
count positive integers

Algorithm
- create sqOfS = 0
= create sOfSq = 0
- create a loop that starts at 1 and increments by 1 until reaching the
count number, square that collective sum of the new number
- create a loop that starts at 1 and increments by 1, before incrememnting on
each round square the number
- return the difference between the two numbers
*/

function sumSquareDifference(number) {
  let sqOfS = 0;
  let sOfSq = 0;
  for (let num = 1; num <= number; num++) {
    sqOfS += num;
    sOfSq += Math.pow(num, 2);
  }
  return Math.pow(sqOfS, 2) - sOfSq
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150

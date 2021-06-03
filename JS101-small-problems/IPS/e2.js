// E2 Diamonds:
/*
Input: number
Output: strings
Rules
- write a function that displays a four pointed diamond in a n x n grid where
n is an odd integer supplied as an argument
- may assume that the argument will always be an odd integer

Algorithm
- create the variable half and set it to half the input number rounded up
- start a loop with index starting at 1 until index equals the input number
- increment the loop by 2 each round
- during each round of iteraton log:
  - a space repeated `half` times and a star repeated `index` times
  - decrement half by one each round
- create secondHalf and set it to 1
- create a second loop starting `index` at the input number -1, increment until
index equals 0 by decrementing two at each round of iteration
- during each round of iteraton log:
  - a space repeated `secondHalf` times and a star repeated `index` times
  - increment `secondHalf` by one during each iteration
*/

function diamond(number) {
  let half = Math.ceil(number / 2);
  for (let idx = 1; idx < number; idx += 2) {
    console.log(' '.repeat(half) + '*'.repeat(idx));
    half--;
  }
  let secondHalf = 1;
  for (let idx = number; idx > 0; idx -= 2) {
    console.log(' '.repeat(secondHalf) + '*'.repeat(idx));
    secondHalf++;
  }
}

diamond(1);
// logs
// *
diamond(3);
// logs
 // *
// ***
//  *
 diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

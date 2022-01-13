// Diamonds
/*
Input: number
Output: string
Rules
- write a function that displays a four-pointed diamond in a `n` x `n` grid, where `n` is an odd
integer supplied as an argument to the function
- you may assume that the argument will always be an odd integer
- if the input number is one, the output should be just 1 star
- the input number otherwise is the number of stars in the middle row of the diamond
- from the middle row the next row is always 2 less
Algorithm
- if the input number is 1, return 1 star as a string
- create `starRepeat` and set it to the input value
- create `middleRow` and set it to a string with a star repeated the same amount of times as the value
of `starRepeat`
- create `sideSpace` and initialize it to 0 to represent the spaces on each side of the stars row
- create a loop for the next row and have it increase sideSpace on the left and right of the starts
row by 1 each and decrease the starts by 2
  - this loop should iterate until the stars are at 1
- reverse process for bottom half
*/

function diamond(number) {
  if (number === 1) {
    console.log('*');
    return undefined;
  };

  let starRepeat = number - 2;
  let sideSpace = 1;

  let star = [];
  while (starRepeat > 0) {
    star.push(`${' '.repeat(sideSpace)}${'*'.repeat(starRepeat)}${' '.repeat(sideSpace)}`);
    starRepeat -= 2;
    sideSpace += 1;
  }

  let top = star.slice().reverse();
  let bottom = star;

  top.forEach(star => console.log(star));
  console.log(`${'*'.repeat(number)}`);
  bottom.forEach(star => console.log(star));
}

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
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
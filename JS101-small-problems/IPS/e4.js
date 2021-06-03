// E4: Seeing Stars
/*
Input:
Output:
Rules
- write a function that displays an 8-pointed star in a N x N grid where
N is an odd integer that is supplied as an argument
- the smallest such star you need to handle is a 7x7 grid where N is 7

Algorithm
- create midSpaces and set it to length / 3 rounded down (MIDDLE)
- create endSpace and set it to 1; (LEFT)
- create topLines = n / 2 rounded up - 2
- Loop (while topLines > 0) (-- after creating each line)
  - Line 1
    - midSpaces --
    - endSpaces ++
  - Line 2
    - midSpaces --
    - endSpaces ++
- Semi Final line always ***
- Middle line star * n
- Semi final line again ***
- create bottomLines n / 2 rounded up - 1
- repeat loop while bottomLines > 0(increment midspaces and decrement endSpaces) while decrementing
bottomLines
*/

function star(number) {
  let midSpaces = (number - 3) / 2;
  let endSpaces = 1;

  let topLines = Math.ceil(number / 2) - 2;
  while (topLines > 0) {
    console.log(' '.repeat(endSpaces) + '*' + ' '.repeat(midSpaces) + '*' + ' '
    .repeat(midSpaces) + '*');
    midSpaces--;
    endSpaces++;
    topLines--;
  }
    console.log(' '.repeat(endSpaces) + '***');
    console.log(' ' + '*'.repeat(number));

  let bottomLines = Math.ceil(number / 2) - 1;
  while (bottomLines > 0) {
    console.log(' '.repeat(endSpaces) + '*' + ' '.repeat(midSpaces) + '*' + ' '
    .repeat(midSpaces) + '*');
    midSpaces++;
    endSpaces--;
    bottomLines--;
  }
}

// star(7)
// star(9)
star(21)

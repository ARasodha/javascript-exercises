// Exercise 2: Bannerizer
/*
input: string
output: string
Rules
- write a function that takes a short line of text, and write it to the console within a box
- you may assume that the output will always fit in your browser window
- implicit:
  - the top and bottom rows starts with a + and has minimum two -
  - there are three middle rows that begin and end with a |
Examples / Test Cases
- "To boldly go where no one has gone before." =>
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
- '' =>
+--+
|  |
|  |
|  |
+--+
Data Structures
- string
Algorithm
- create the top and bottom row which is a string that begins with + and repeat - for the length
of the input string text plus two
- the middle top and bottom rows should begin and end with | and repeat spaces for the length of the
 string + 2
 - the center row should begin and end with | and have on space between this char and the text 
*/
function logInBox(shortString) {
  let topAndBottom = '+' + '-'.repeat(shortString.length + 2) + '+';
  let middleSpace = '|' + ' '.repeat(shortString.length + 2) + '|';
  let middleRow = '| ' + shortString + ' |';
  console.log(topAndBottom);
  console.log(middleSpace);
  console.log(middleRow);
  console.log(middleSpace);
  console.log(topAndBottom);
}

// Test Cases
logInBox('To boldly go where no one has gone before.');
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

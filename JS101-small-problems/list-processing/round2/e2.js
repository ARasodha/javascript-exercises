// E2 Alphabetical Numbers:

/*
Explicit Requirements:
- Input: array of integers between 0 - 19
- Output: array of strings
- Return an array of numbers based on the alphabetical order of their english words
- Numbers are from zero to nineteen
Implicit Requirements:
- Do we return the same array or a new array

Data  Structure
- Using an array for the final results
- Using an object for selecting the correct word for number

Algorithm
- Create `result` array set to an empty array
- Create an object `combos` with english word keys and corresponding numbers zero to nineteen
- iterate over input array and push the matching value into the result array (english word)
- sort result array
- iterate over result array and check if the idx
*/






// !!!!!!!!!!!!  ALGO DID NOT WORK RE DO   !!!!!!!!!!!!!!!!!


const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
 'eight', 'nine', 'ten', 'eleven', 'tweleve', 'thirteen', 'fourteen', 'fifteen',
 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

 function wordSort(num1, num2) {
   if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
     return 1;
   } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
     return -1;
   } else {
     return 0;
   }
 }

 function alphabeticNumberSort(array) {
   return [...array].sort(wordSort);
 }

 console.log(alphabeticNumberSort(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
 // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

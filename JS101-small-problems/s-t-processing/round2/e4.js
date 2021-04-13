/*E4 Capitalize Words:
Explicit Requirements
- Input: string
- Output: string
- Uppercase the first letter of every word in the string (sentence)
- The rest of each word should be lowecase
- A word is any sequence of non-whitespace characters
Implicit Requirements (Questions)
- Are the rest of the words always lowercased or can they can an uppercase character

Data Structure
- Using strings

Algorithm
- iterate over each word in the string
- access the first letter of each word and turn it to toUpperCase
- turn the rest of each word to toLowerCase
- Join the words back into a string
- return the new string
*/

function wordCap(string) {
  return string.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1) toLowerCase();
  }).join(' ');
}

console.log(wordCap('four score and seven')); // "Four Score And Seven"
console.log(wordCap('the javaScript language')); // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'

// E10 Series:
/*
Input: string
Output: nested array
Rules
- take a string of digits and return all the possible consecutive number series of a specified
length in that string
- if the length requested of the series is less than the length of the string then throw an
error

Test Cases: in series.test.js

Algorithm
- create Series class
- constructor takes a numString argument, set it to numString property
- instance methods:
  - slices() - takes number argument that specifies length of series of numbers
  - if this.numString's length property is less than the specified number throw an error
  - create result empty array
  - take substrings and if it is a number then split each group of number series into an array 
  of individual numbers and push that number into result
  - return result array
    - substrings() helper method - takes a string and returns all substrings within that string
*/

class Series {
  constructor(numString) {
    this.numString = numString;
  }

  slices(size) {
    if (size > this.numString.length) throw new Error('Size cannot be greater than string length.');
    
    let substrings = getSubstrings(this.numString, size);
    return substrings.map(substring => {
      return substring.split('').map(string => Number(string));
    })

  }

  getSubstrings(string, size) {
    let substrings = [];
    for (let idx = 0; idx <= string.length - size; idx++) {
      let jdx = idx + size;
      let substring = string.slice(idx, jdx);
      substrings.push(substring);
    }
    
    return substrings;
  }
}

function getSubstrings(string, size) {
  let substrings = [];
  for (let idx = 0; idx <= string.length - size; idx++) {
    let jdx = idx + size;
    let substring = string.slice(idx, jdx);
    substrings.push(substring);
  }
  
  return substrings;
}

module.exports = Series;
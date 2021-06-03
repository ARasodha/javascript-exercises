/*E2 Triangle Sides:
Input: 3 seperate numbers
Output: string
Rules:
- a valid triangle the sum of the lengths ofthe two shortest sides must be
greater than the length of the lonest side and every side must be greater than 0
- Equilaterals - all three sides are of equal length
- Isosceles - Two sides are of equal length
- Scalene - All three sides are of different lengths

Data Structure
- working with numbers

Algorithm
- enter all three sides into an array and sort them from smallest to largest
- if side 1 and side 2 are larger than side three --> invalid
- if any of the sides lengtgh is 0 --> invalid
  - Create `isInvalid` helper function for the two points above
- Else If af all sides are the same length ---> equilateral
- Else if two sides have the same length --> isosceles
- Else if all three sides are different --> scalene
- */

function triangle(side1, side2, side3) {
  let sortedSides = [side1, side2, side3].sort();
  if (isInvalid(sortedSides)) return 'invalid';
  let [one, two, three] = sortedSides;
  if (one === two && two === three) {
    return 'equilateral';
  } else if (one === two || two === three || one === three) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

function isInvalid(array) {
  return array[0] === 0 || array[1] === 0
  || array[2] === 0 || array[0] + array[1] < array[2];
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

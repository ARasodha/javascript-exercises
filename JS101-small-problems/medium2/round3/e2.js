// Ex2 Triangle Sides:
/*
Input: 3 numbers
Output: string
Rules
- take in the length of all three sides of a triangle and return the type
- the three sides:
  - equilateral: all three sides are the same length
  - isosceles: two sides are of equal length, while the third is different
  - scalene: all three sides are of different length
- to be a valid triangle:
  - the sum of the lengths of the two shortest sides must be greater than the
  length of the longest side
  - every side must have a length greater than 0
  - if either of these are the case return the string 'invalid'

Algorithm
- take all three sides, insert them into an array and sort them from shortest
to longest
- if the first two sides sum is not greater than the third side return invalid
- if any of the sides is equal to 0 return invalid
  - create helper function isInvalid for the above to
- if all sides are the same length return equilateral
- if two sides are the same and the third is different return isosceles
- if all three sides are different return scalene
*/

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort((a, b) => Number(a) - Number(b));
  if (isInvalid(sides)) return 'invalid';
  

  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    return 'isoceles';
  } else {
    return 'scalene';
  }

}

function isInvalid(sides) {
  if (sides[0] + sides[1] <= sides[2] ||
    sides.some(side => side === 0)) {
      return true;
    }
    return false;
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

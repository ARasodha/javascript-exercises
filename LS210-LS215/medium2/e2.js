// Exercise 2: Triangle Sides
/*
input: 3 numbers
output: string
Rules 
- a triangle is classified as follows:
  - equilateral: all three sides are equal length
  - isosceles: two sides are of equal length, while the third is different
  - scalene: all three sides are of different length
- to be a valid triangle:
  - the sum of the lengths of the two shortest sides must be greater than the length of the longest
  side
  - every side musth have a length greater than 0
  - if either of these conditions is not satisfied, the triangle is invalid
- write a function that takes the lengths of the three sides of a triangle as arguments and returns
one of the following four strings: "equilateral", "isosceles", "scalene" or "invalid"
Examples / Test Cases
- 3, 3, 3 => "equilateral"
- 3, 3, 1.5 => "isosceles"
- 3, 4, 5 => "scalene"
- 0, 3, 3 => "invalid"
- 3, 1, 1 => "invalid"
Data Structure
- numbers 
Algorithm
- create sortedSides and initialize it to an array with all three length arguments inside of it
and sort the array from smallest to greatest
- create `isValid` helper function that takes the 3 sides in an array
  - is every length in the argument doesn't equal 0 AND if the value at index 0 and index 1 in the 
  arrays sum is greater than the value at index 3 then return true
- if isEqual returns false, return the string "invalid"
- if sortedSides at index 1 === index 2 AND index 2 === index 3 then return "equilateral"
- if sortedSides at index 1 === index 2 OR index 2 === index 3 OR index 1 === index 3then return 
"isosceles"
- if sortedSides at index 1 != index 2 AND index 2 != index 3 AND index 1 != index 3 then return
"scalene"
*/

function triangle(side1, side2, side3) {
  let sortedSides = [side1, side2, side3].sort((a, b) => a - b);
  if (!isValid(sortedSides)) return "invalid";

  if (sortedSides[0] === sortedSides[1] && sortedSides[1] === sortedSides[2]) {
    return "equilateral";
  } else if (sortedSides[0] === sortedSides[1] || sortedSides[1] === sortedSides[2] || 
    sortedSides[0] === sortedSides[2]) {
      return "isosceles";
    } else {
      return "scalene";
    }
}

function isValid(sides) {
  return sides.every(side => side != 0) && sides[0] + sides[1] > sides[2];
}

// Test Cases
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
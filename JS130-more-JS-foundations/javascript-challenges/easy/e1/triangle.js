// E1 Triangles:
/*
Input: 3 numbers
Output: string
Rules:
- determine whether a triangle is:
  - equilateral: triangle has all three sides the same length
  - isosceles: triangle has exactly two sides of the same length
  - scalene: triangle has all sides of different lengths
  - to be valid: all sides length must be > 0, and the sum of the lengths of any two sides
  must be greater than the length of the third side
  - invalid triangles should throw and error

Test cases: on ./triangle.test.js

Algorithm:
- create Triangle constructor function
  - three properties: side1, side2, side3
  - instance methods:
    - isValid - checks if all sides are greater than 0 and if any two sides are greater
    than the third side (can create two sub methods) - if invalid throw and error
    - kind - if the triangle is valid, based on the size of the three sides return a string
    of the type of side.   
*/
"use strict";

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.isValid();
  }

  isValid() {
    if ([this.side1, this.side2, this.side3].includes(0)) {
      throw Error('This triangle is invalid! One side has the length of 0.');
    }

    if (this.side1 + this.side2 <= this.side3 || this.side2 + this.side3 <= this.side1 ||
        this.side1 + this.side3 <= this.side2) {
          throw Error('This triangle is invalid! Two sides are less than the third.');
        }
    
    return true;
  }

  kind() {
    if ([this.side1, this.side2, this.side3].every(side => side === this.side1)) {
      return 'equilateral';
    } else if (this.side1 === this.side2 || this.side2 === this.side3 || this.side1 === this.side3) { 
      return 'isosceles';
    } else {
      return 'scalene';
    }
  }
}


module.exports = Triangle;
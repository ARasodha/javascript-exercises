// Robot Name
/*
Input: no input
Output: 
Rules
- create a robot factory program
- when a robot is created, a random name is generated with two letters followed by three numbers
(ex: RX837)
- there needs to be an option to reset the robot to factory settings (no name), and the next time its name
is asked, a new one is generated (random name)
- name must be random, there should be no risk of collisions (No two robots should have the same name)

Algorithm
- create Robot class
- create static names proprty, set to array of names being used
- constructor - no arguments 
  - create name property, initially set to null
- instance methods:
  - name() - takes no arguments, return a new name for the robot
    - generate random number helper method
    - generate two random letters helper method
  - reset() - resets the robots name, and removes it from the names array 
*/
"use strict";

class Robot {
  constructor() {
    this.identity = null;
  }

  static names = [];

  name() {
    if (this.identity) return this.identity;
    this.identity = this.randomLetters() + this.randomNumbers();
    Robot.names.push(this.identity);
    return this.identity;
  }

  randomLetters() {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    while (result.length !== 2) {
      let randomIndex = Math.floor(Math.random() * letters.length);
      result += letters[randomIndex];
    }

    return result;
  }

  randomNumbers() {
    let numbers = '0123456789';
    let result = '';
    
    while (result.length !== 3) {
      let randomIndex = Math.floor(Math.random() * numbers.length);
      result += numbers[randomIndex];
    }
    
    return result;
  }

  reset() {
    let index = Robot.names.indexOf(this.identity);
    Robot.names.splice(index, 1);
    this.identity = null;
  }
}

module.exports = Robot;
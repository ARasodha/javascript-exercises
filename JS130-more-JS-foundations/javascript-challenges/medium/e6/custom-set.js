// Custom Set
/*
Input:
Output:
Rules
- create your own custom data structure of some type, like a set
- define your own set type
- how it works internally does not matter as long as it has the desired behaviour
- don't use the JavaScript built-in Set type

Algorithm
- create CustomSet class
- constructor - take an array of numbers, set it to set property, if no argument set empty array
- instance methods:
  - isEmpty() - checks if the set is empty, returns boolean
  - contains() - takes number and returns boolean whether the set contains that number or not
  - isSubset() - takes another set - returns boolean if the other set is a subset of the current set
  - isDisjoint() - takes another set - returns a boolean if the other set is disjoint 
  - isSame() - takes another set - returns a boolean if the other set has the same elements
  - add() - takes a number, and adds it to the set
  - intersection() - takes another set, returns all of the shared elements 
  - difference() - takes another set, returns a new set with the difference values
  - union() - takes another set returns a set of all the same elements
*/
"use strict";

class CustomSet {
  constructor(set) {
    this.set = set ? set : [];
  }

  isEmpty() {
    return this.set.length === 0;
  }

  intersection(otherSet) {
    let commonElements = [];
    for (let idx = 0; idx < this.set.length; idx++) {
      if (otherSet.set.includes(this.set[idx])) {
        commonElements.push(this.set[idx]);
      }
    }
    return new CustomSet(commonElements);
  }

  union(otherSet) {
    let duplicateSet = this.set.slice();
    otherSet.set.forEach(value => {
      if (!duplicateSet.includes(value)) {
        duplicateSet.push(value);
      }
    });
    return new CustomSet(duplicateSet.sort());
  }

  difference(otherSet) {
    let filteredSet = this.set.filter(value => !otherSet.set.includes(value));
    return new CustomSet(filteredSet);
  }

  isDisjoint(otherSet) {
    return !this.set.filter(value => otherSet.set.includes(value)).length > 0;
  }

  isSame(otherSet) {
    if (this.set.length !== otherSet.set.length) return false;
    for (let idx = 0; idx < this.set.length; idx++) {
      if (!otherSet.set.includes(this.set[idx])) return false;
    }
    return true;
  }

  isSubset(otherSet) {
    for (let idx = 0; idx < this.set.length; idx++) {
      if (!otherSet.set.includes(this.set[idx])) return false;
    }
    return true;
  }

  add(element) {
    if (!this.set.includes(element)) {
      this.set.push(element);
    }
    return this;
  }

  contains(element) {
    return this.set.includes(element);
  }
}

const actual = new CustomSet().isSubset(new CustomSet([1]));
console.log(actual)
module.exports = CustomSet;
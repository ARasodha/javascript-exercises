// Simple Linked List
/*
Input: 
Output:
Rules
- create a singly linked list whose elements may contain a range of data such as the numbers
1-10. Provide functions to reverse the linked list and convert a linked list to and from an 
array
- we are making a singly linked list - meaning that each element in the list does not need to
have info about any other element in the list except for the `next` element
- each element in the list contains data (a value) and a `next` field that points to the 
next element in the list of elements
- the elements of our linked list may contain any data values
- we'll need a method that reverses a linked list, as well as methods that convert a linked
list to and from an array
- we may also need to write several helper methods

Algorithm
- create Element class 
  - constructor takes one argument, a number, set it to an instance property, value
  - instance methods:
    - datum() - returns the value of the calling element
    - isTail
*/
"use strict";

class Element {
  constructor(value, nextValue = null) {
    this.value = value;
    this.nextValue = nextValue;
  }

  datum() {
    return this.value;
  }

  isTail() {
    return true;
  }

  next() {
    return this.nextValue;
  }
}

class SimpleLinkedList {
  constructor(array) {
    this.list = [];
    if (array) this.convertValuesToElements(array);
  }

  push(value) {
    if (this.size() > 0) {
      let next = this.head();
      this.list.push(new Element(value, next));
    } else {
      this.list.push(new Element(value));
    }
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.list[this.list.length - 1] ? this.list[this.list.length - 1].value : null;
  }

  head() {
    return this.list[this.list.length - 1];
  }
  pop() {
    return this.list.pop().value;
  }

  convertValuesToElements(array) {
    if (array !== null) {
      array.reverse().forEach(value => this.push(value));
    }
  }

  static fromArray(array) {
    return new SimpleLinkedList(array);
  }

  toArray() {
    return this.list.map(listItem => listItem.value);
  }

  reverse() {
    let index = 0
    let array = [];
    while(index < this.list.length) {
      array.push(this.list[index].value);
      index++;
    }
    return new SimpleLinkedList(array);
  }
}


let list = SimpleLinkedList.fromArray([1, 2]).toArray();
console.log(list); //[1, 2]

module.exports = {
  Element,
  SimpleLinkedList,
};



// E7 Node to Array:
/*
input:
output:
Rules / Requirements
- implement a function that converts the DOM, starting from the body, to nested arrays
- each element in the DOM is represented as ["PARENT_TAG_NAME", [children]] where children are
elements as well and as such follow the same format 
- when an element has no children, it's represented as ["PARENT_TAG_NAME", []]
- for instance, if the HTML doesn't have any elements inside the `body`, the result would be
["BODY", []]
- likewise, if the HTML only has a div element as its content, the result array would be:
["BODY", [["DIV", []]]].
Examples / Test Cases
-> nodesToArr();
= ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]

// OR

= ["BODY", [
    ["HEADER", []],
    ["MAIN", []],
    ["FOOTER", []]]]
Data Structure
- array
Algorithm
- create array and init to empty array
- create currentElement 
*/

// Test Cases
// SET 1
nodesToArr();
// = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]

// // OR

// = ["BODY", [
//     ["HEADER", []],
//     ["MAIN", []],
//     ["FOOTER", []]]]

// SET 2
nodesToArr();
// = ["BODY",[["HEADER",[]],["MAIN",[["DIV",[]],["DIV",[]]]],["FOOTER",[]]]]

// // OR

// = ["BODY", [
//     ["HEADER", []],
//     ["MAIN", [
//       ["DIV", []],
//       ["DIV", []]]],
//     ["FOOTER",[]]]]

// SET 3
nodesToArr();
// = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]]

// OR
nodesToArr();
// = ["BODY", [
//     ["DIV", [
//       ["DIV", []],
//       ["DIV", [
//         ["DIV",[]]]]]],
//     ["DIV", []],
//     ["DIV", [
//       ["DIV", []],
//       ["DIV", []],
//       ["DIV", []]]]]]
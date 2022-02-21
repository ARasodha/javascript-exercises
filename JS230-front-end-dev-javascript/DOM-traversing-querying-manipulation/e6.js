// E6 Node Swap:
/*
input:
output:
Rules / Requirements
- write a function that takes two element ids as arguments and swaps the positions of the elements
represents by the ids
- the function returns true for valid swaps and undefined for invalid
- to put focus on the node swapping functionality, you can assume that nodes will have the value for
the id attribute and two arguments will always be provided
- use the provided HTML and sample code to test your output
Examples / Test Cases
// at least one of the id attributes doesn't exist
> nodeSwap(1, 20);
= undefined

// at least one of the nodes is a "child" of the other
> nodeSwap(1, 4);
= undefined
> nodeSwap(9, 3);
= undefined
Data Structure
- 
Algorithm
- create element1 and init to the element with the first id input
- create element2 and init to the element with the second id input
- if element1 or element2 are null, return undefined
- create parent and init to element1 parentNode
- create siblingsOfEl1 and init to parents children
- if element2 is not included in siblingsOfEl1, return undefined
- otherwise:
- create el1Copy and init to copy of element1
- create el2Copy and init to copy of element2
- invoke replace node with el1Copy for element2
- invoke replace node with el2Copy for element1
- return true
*/

function nodeSwap(id1, id2) {
  let el1 = document.getElementById(String(id1));
  let el2 = document.getElementById(String(id2));
  if (!el1 || !el2) return undefined;

  let parent = el1.parentNode;
  let siblingsOfEl1 = Array.from(parent.children);
  if (!siblingsOfEl1.includes(el2)) return undefined;

  let el1Clone = el1.cloneNode(true);
  let el2Clone = el2.cloneNode(true);

  parent.replaceChild(el1Clone, el2);
  parent.replaceChild(el2Clone, el1);
  return true;
}


// Test Cases
// at least one of the id attributes doesn't exist
nodeSwap(1, 20);
// = undefined

// at least one of the nodes is a "child" of the other
nodeSwap(1, 4);
// = undefined
nodeSwap(9, 3);
// = undefined

// one swap
nodeSwap(1, 2);

// multiple swaps
nodeSwap(3, 1);
nodeSwap(7, 9);
// E4 Tree Slicing:
/*
input: 2 numbers (start and end ids)
output: array 
Rules / Requirements
- implement a function, `sliceTree`, that is "similar" to Array.prototype.slice method, but this 
time for a DOM tree
- the sliceTree function takes two arguments
  - the start index which is the parent node's id attribute
  - the end index which is the inner most child nodes id attribute
- the function returns an array of tagNames
- take note of the following when implementing the function:
  - it's similar to slice but different in the sense that `slice` isn't inclusive on the right
  hand side
  - the end index doesn't have to be the id of the "innermost" child node as some of the examples
  suggest 
  - only consider element nodes
  - only element that have body as an ancestor (parent, grandparent etc) are sliceable
  - if the id attribute of the start or end index is not in the dom, return `undefined`
  - if the slice is not feasible -- theres no path connecting the element at the starting index to 
  the ending index -- return `undefined`
Examples / Test Cases
> sliceTree(1, 4);
= ["ARTICLE", "HEADER", "SPAN", "A"]
> sliceTree(1, 76);
= undefined
> sliceTree(2, 5);
= undefined
> sliceTree(5, 4);
= undefined
> sliceTree(1, 23);
= ["ARTICLE", "FOOTER"]
> sliceTree(1, 22);
= ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
> sliceTree(11, 19);
= ["SECTION", "P", "SPAN", "STRONG", "A"]
Data Structure
- array
Algorithm
- create treeSlice empty array
- create endElement and init to the element with the end id
- create startElement and init to the element with the start id
- create currentElement and init to endElement
- create currentId and init to the endId
- create a loop that runs while endId <= startId and on each round of iteration
  - unshift the currentElement tagName to array
  - reassign currentElement to currentElement.parentNode
  - decrement currentId by 1
  - if Number(currentElement.id) !== currentId break the loop
- once the loop has terminated, return treeSlice
*/

function sliceTree(startId, endId) {
  let treeSlice = [];
  let endElement = document.getElementById(String(endId));
  let startElement = document.getElementById(String(startId));
  let currentElement = endElement;
  let currentId = endId;

 do {
    treeSlice.unshift(currentElement.tagName);
    currentElement = currentElement.parentNode;
    currentId--;
    console.log(currentElement, currentElement.getAttribute('id'), currentId)
    if (Number(currentElement.id) !== currentId) break
  } while (currentId >= startId);

  return treeSlice;
}

// Test Cases
sliceTree(1, 4);
// = ["ARTICLE", "HEADER", "SPAN", "A"]
sliceTree(1, 76);
// = undefined
sliceTree(2, 5);
// = undefined
sliceTree(5, 4);
// = undefined
sliceTree(1, 23);
// = ["ARTICLE", "FOOTER"]
sliceTree(1, 22);
// = ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]
sliceTree(11, 19);
// = ["SECTION", "P", "SPAN", "STRONG", "A"]

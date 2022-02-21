// E5: Coloring 
/*
input:
output:
Rules / Requirements
- write a function that colors a specific generation of the DOM tree
- a generation is a set of elements that are on the same level of indentation 
- we'll be using a "styled" HTML for this exercise to better visualize the generations 
- you may use the .generation-color class to color the specific generation
- you can assume that only non-negative integers will be provided as arguments 
- following are some sample output to help test your code
Examples / Test Cases
// colorGeneration(1);
// colorGeneration(4);
// colorGeneration(7);
// colorGeneration(8);
// colorGeneration(3);
// colorGeneration(0);
Data Structure

Algorithm
- if the targetGen (input) === 0, return
- crete generation and init to 0 
- create elements and init to array with document.body inside
- create currentChildren empty array
- while generation < targetGen(input)
  - for each element in elements, push elements.children into currentChildren
  - increment generation by 1
  - reassign elements to currentChildren copy
  - reassign currentChildrento empty array
- once the loop has terminated
- if the elements array is not empty
  - iterate over elements and add the .generation-color class to each element
*/

function colorGeneration(targetGen) {
  if (targetGen === 0) return;
  
  let generation = 0;
  let elements = [document.body];
  let currentChildren = [];
  
  while (generation < targetGen) {
    elements.forEach(element => currentChildren.push(...Array.from(element.children)));
    generation++;

    elements = currentChildren.slice();
    currentChildren = [];
  }

  if (elements.length > 0) {
    elements.forEach(element => {
      element.classList.add('generation-color');
    });
  }
}

// Test Cases
colorGeneration(1); // works
colorGeneration(4); // works 
colorGeneration(7); // works
colorGeneration(8); // works
colorGeneration(3); // works
colorGeneration(0); // works
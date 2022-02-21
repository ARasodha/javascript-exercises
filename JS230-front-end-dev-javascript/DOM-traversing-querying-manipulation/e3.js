// E3 Tracing the DOM Tree
/*
input: string (id)
output: nested array
Rules / Requirements
- write a JavaScript function that takes an elements id and returns the DOM tree of the element
in an two-dimensional array
- the first subarray contains the element and its siblings, the second contains the parent of the 
element and its siblings, so on and so forth, all the way up to the grandest parent
- assume that the grandest parent is the element with an id of "1"
- use the provided HTML and test cases to test your code
Examples / Test Cases
- > domTreeTracer(1);
= [["ARTICLE"]]
> domTreeTracer(2);
= [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
> domTreeTracer(22);
= [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
Data Structure
- array -- nested
Algorithm
- create result empty array
- create currentElement and init to the element with the input id
- create parent and init to the currentElement parent node
- create a loop that runs while parent doesnt equal document.body and on each round of iteration:
  - obtain the children of parent as an array, map over it to convert them to their tagName
    - push the mapped array to result
  - reassign currentElement to parent
  - reassign parent to currentElement.parent
- once the loop has terminated:
- return result
*/
document.addEventListener("DOMContentLoaded", event => {
  function domTreeTracer(id) {
    let result = [];
    let currentElement = document.getElementById(String(id));
    let parent;
  
    do {
      parent = currentElement.parentNode;
      let children = Array.from(parent.children).map(child => child.tagName);
      result.push(children);
  
      currentElement = parent;
      parent = currentElement.parentNode;
    } while (parent.tagName !== 'HTML');
  
    return result;
  }
  
  
  // Test Cases
  console.log(domTreeTracer(1));
  // = [["ARTICLE"]]
  console.log(domTreeTracer(2));
  // = [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
  console.log(domTreeTracer(22));
  // = [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
})

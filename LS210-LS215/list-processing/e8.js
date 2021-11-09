// Exercise 8: Grocery List
/*
Input: nested array
Output: array
Rules
- write a function that takes a grocery list in a nested array and returns an array
- each element in the grocery list contains a fruit name, and a number the represents
the desired quantity of that fruit
- the output array is such that each fruit name appears the number of times equal to 
the quantity
Algorithm
- create groceryList empty array
- iterate over input array and on each round of iteration
  - push the string into the empty array the number of times of the number in the array
  - use a nested loop
- once the outer loop has terminated, return the groceryList array
*/
// My Solution
function buyFruit(orders) {
  let groceryList = [];
  orders.forEach(order => {
    while (order[1] > 0) {
      groceryList.push(order[0]);
      order[1]--;
    }
  });

  return groceryList;
}

// Lesson Solution
function buyFruit(fruitList) {
  return fruitList.map(fruit => repeat(fruit))
                  .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruit) {
  const result = [];

  for (let i = 0; i < fruit[1]; i += 1) {
    result.push(fruit[0]);
  }

  return result;
}

// Test Case
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
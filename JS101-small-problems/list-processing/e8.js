// E8 Grocery List:
// My Solution:
function buyFruit(groceryList) {
  let fruitQuantity = [];
  groceryList.forEach(item => {
    for (let idx = 0; idx < item[1]; idx++) {
      fruitQuantity.push(item[0])
    }
  })
  return fruitQuantity;
}

buyFruit([
  ['apple', 3],
  ['orange', 1],
  ['banana', 2]
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
console.log(buyFruit([
  ['apple', 3],
  ['orange', 1],
  ['banana', 2]
]));

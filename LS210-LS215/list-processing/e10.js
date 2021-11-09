 // Exercise 10: Inventory Item Availability
 /*
 Input: number, array of object
 Output: boolean
 Rules
 - building on the previous exercise, write a function that returns a boolean
 based on whether or not an inventory item is available
 - as before, the function takes two arguments, itemId number and transactions array
 - the function should return true only if the sum of the quantity values of the item's
 transactions is greater than 0
 - notice that there is a movement property in each transaction object
 - a movement of `out` will decrease the items quantity
 - you may and should use the `transactionsFor` function from the previous exercise
 Algorithms
 - get transactions for the `id` number using `transactionsFor` helper function
 - iterate over transactions array and if the difference between transactions 
 with the movement `in` and `out` is greater than 0 then return true and if not 
 return false
 */
// My Solution
 function isItemAvailable(itemId, transactions) {
  let transactionsList = transactionsFor(itemId, transactions);
  let quantity = 0;

  transactionsList.forEach(transaction => {
    if (transaction.movement === 'in') {
      quantity += transaction.quantity;
    } else if (transaction.movement === 'out') {
      quantity -= transaction.quantity;
    }
  });

  return quantity > 0;
 }

 function transactionsFor(itemId, transactions) {
  return transactions.filter(transaction => transaction.id === itemId);
}

// Lesson Solution:
function isItemAvailable(item, transaction) {
  const quantity = transactionsFor(item, transactions).reduce((sum, transaction) => {
    if (transaction.movement === 'in') {
      return sum + transaction.quantity;
    } else {
      return sum - transaction.quantity;
    }
  }, 0);

  return quantity > 0;
}

function transactionsFor(itemId, transactions) {
  return transactions.filter(transaction => transaction.id === itemId);
}

// Test Cases
const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
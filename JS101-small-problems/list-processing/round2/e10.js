/*E10 Inventory Item Availability:
Explicit Requirements
- Input: ID number (number), transactions list (array)
-Output: boolean
- Return true or false based on if the inventory item is available
- if the sum of the item quanitity  is greater than 0 === true
- movememnt property indicates whether the item was sold or if its in stock
- use `transactionsFor` function
Data Structure
- working with array input but returning boolean

Algorithm
- Create `count` set it to `0` to keep track of quanitity
- Create `transactions` and set it to only the transactions with the input ID
  a. filter transactions for ones with the same id` as the input
- Iterate over transactions array
- If movement is 'in' add the quantity
- If moveement is 'out' substract the quantity
- return count is greater than 0
*/

// My Solution:
// function isItemAvailable(itemID, transactions){
//   let count = 0;
//   transactions = transactionsFor(itemID, transactions);
//   transactions.forEach(transaction => {
//     if (transaction.movement === 'in') {
//       count += transaction.quantity;
//     } else {
//       count -= transaction.quantity;
//     }
//   })
//
//   return count > 0;
// }

function transactionsFor(itemID, transactions) {
  return transactions.filter(transaction => itemID === transaction.id);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

// LS Solution:
function isItemAvailable(item, transactions) {
  let quantity = transactionsFor(item, transactions).reduce(
    (sum, transactions) => {
      if (transactions.movement === 'in') {
        return sum + transactions.quantity;
      } else {
        return sum - transactions.quantity;
      }
    }, 0
  )
  return quantity > 0;
}
console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

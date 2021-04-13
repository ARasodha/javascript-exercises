/*E9 Inventory Item Transactions:
Explicit Requirements
- Input: inventory item ID (NUMBER), list of transactions (ARRAY)
- Output: array
- the returned array should contain only the list items for the specified item (id num)

Data Structure
- Array, array is being returned as a list

Algorithm
- Create `selection` empty array for selected Transactions
- iterate over transactions, id matches input id push to selection array
- return `selection` array

*/

function transactionsFor(itemID, transactions) {
  return transactions.filter(item => item.id === itemID);
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
                     
console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// Inventory Item Availability:
// My Soluitiion:
function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(object => object.id === inventoryItem);
}

// function isItemAvailable(itemID, transactions) {
//   let totalQuantity = 0;
//   let filteredTransactions = transactionsFor(itemID, transactions);
//   filteredTransactions.forEach(object => {
//     if (object.movement === 'out') {
//       totalQuantity -= object.quantity;
//     } else if (object.movement === 'in') {
//       totalQuantity += object.quantity;
//     }
//   })
//   return totalQuantity > 0;
// }
// Lesson Soluition:
function isItemAvailable(inventoryItem, transactions) {
  let quantity = transactionsFor(inventoryItem, transactions).reduce(
    (sum, transaction) => {
      if (transaction.movement === 'in') {
        return sum + transaction.quantity;
      } else {
        return sum - transaction.quantity;
      }
    },
    0
  )
  return quantity > 0;
}


let transactions = [{
    id: 101,
    movement: 'in',
    quantity: 5
  },
  {
    id: 105,
    movement: 'in',
    quantity: 10
  },
  {
    id: 102,
    movement: 'out',
    quantity: 17
  },
  {
    id: 101,
    movement: 'in',
    quantity: 12
  },
  {
    id: 103,
    movement: 'out',
    quantity: 20
  },
  {
    id: 102,
    movement: 'out',
    quantity: 15
  },
  {
    id: 105,
    movement: 'in',
    quantity: 25
  },
  {
    id: 101,
    movement: 'out',
    quantity: 18
  },
  {
    id: 102,
    movement: 'in',
    quantity: 22
  },
  {
    id: 103,
    movement: 'out',
    quantity: 15
  },
];

// isItemAvailable(101, transactions);     // false
// isItemAvailable(103, transactions);     // false
// isItemAvailable(105, transactions);     // true

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));

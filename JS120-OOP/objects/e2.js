// E2 Buggy Code 2:
let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
};

function discountItem(item, percent) {
  let discount = item.price * percent / 100;
  return item.price - discount;
}

console.log(discountItem(item, 20));   // should return 40
// = 40
console.log(discountItem(item, 50));    // should return 25
// = 20
console.log(discountItem(item, 25));     // should return 37.5
// = 15
// E7 Double Doubles:
function isDouble(number) {
  let numString = String(number);
  let center = Math.floor(numString.length / 2);
  let leftNum = numString.substring(0, center);
  let rightNum = numString.substring(center);
  return leftNum === rightNum;
}

function twice(number) {
  if (isDouble(number)) {
    console.log(number);
  } else {
    console.log(number * 2);
  }
}
twice(37); // 74
twice(44); // 44
twice(334433); // 668866
twice(444); // 888
twice(107); // 214
twice(103103); // 103103
twice(3333); // 3333
twice(7676); // 7676

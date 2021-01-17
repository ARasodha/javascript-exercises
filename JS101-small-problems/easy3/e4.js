// E4 Fibonacci Number Location By Length:
function findFibonacciIndexByLength(length) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}

console.log(findFibonacciIndexByLength(2));
console.log(findFibonacciIndexByLength(10));
console.log(findFibonacciIndexByLength(16));

findFibonacciIndexByLength(2); // 7
findFibonacciIndexByLength(10); // 45
findFibonacciIndexByLength(16); // 74

// Don't try any higher values until you read the solution Discussion

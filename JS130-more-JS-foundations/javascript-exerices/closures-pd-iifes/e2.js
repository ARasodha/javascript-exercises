// E2: myBind() Improved
function myBind(func, ctx) {
  let partialArgs = [].slice.apply(arguments, [2]);
  
  return function() {
    let remainingArgs = [].slice.apply(arguments);
    let fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(ctx, fullArgs);
  }
}

function add(num1, num2) {
  return num1 + num2;
}

let addFive = myBind(add, null, 5);
console.log(addFive(50)); // 55
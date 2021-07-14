// Closures, Private Data and IIFEs 
// E1: Our very own bind()
function myBind(func, context) {
  return (...args) => func.apply(context, args);
}


// Independent Test Case
function add(num) {
  return this.number + num;
}

let obj = {number: 1};

let add2 = myBind(add, obj);

console.log(add2(2));

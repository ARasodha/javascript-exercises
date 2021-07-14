// E3 Make a Stack:
function createStack() {
  let stack = [];

  return {
    push(value) {
      stack.push(value);
    },

    pop() {
       console.log(stack.pop());
    },

    printStack() {
      stack.forEach(value => console.log(value));
    }
  }
}

let stack = createStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.push(4);
stack.printStack();
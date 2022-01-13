// Exercise 4: Stack Machine Interpretation
/*
input:
output:
Rules
- a stack is a list of values that grows and shrinks dynamically 
- a stack may be implemented as an Array that uses two array methods: push and pop
- stack-and-register programming language is a language that uses a stack of values, each 
operation in the languages operates on a register, which can be thought of as the current value
- an operation that requires two values pops the topmost item from the stack, operates on the
popped value and register value, and stores the result back in the register
- for example, a MULT operation in a stack-and-register language -- removes the value from
the stack, multiplies the removed stack value with the register value, then stores the result back
in the register
- write a function the implements a miniature stack-and-register based programming language
that has the following commands (also called operations or tokens)
  - n: place a value n, in the register. Do not modify the stack
  - PUSH: push the register value onto the the stack. Leave the value in the register
  - ADD: pop the value from the stack and add it to the register value, storing the result
  in the register
  - SUB: pop the value from the stack and subtract it from the register value, storing the result in
  the register
  - MULT: pop the value from the sta ck and multiply it by the register value, storing the result in
  the register
  - DIV: pop a value from the stack and divide the register value by the popped stack value,
  storing the result in the register
  - REMAINDER: pop a value from the stack and divide the register value by popped stack value,
  storing the integer remainder of the division back in the register
  - POP: remove hte topmost item from the stack and place it in the register
  - PRINT: print the register value
- all operations are integer operations ( which is only important with DIV and REMAINDER )
- programs will be supplied to your language function via a string argument
- your function may assume that all arguments are valid programs
- initialize the stack and registers values to [] and 0, respectively 
Examples / Test Cases
- [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, the MULT 
operation mutates the stack to [3, 6] (the 4 is removed) and the result of the multiplication,
28, is left in the register, if we do another MULT, at this point, the stack is mutated to [3], and
the register is left with the value 168 (6 * 28)
Data Structure
- string and numbers 
Algorithm
- create operations and initialize it to the input string split into an array of words (split by a
   space)
- create stack empty array
- create register and initialize it to 0
- iterate over the operations and within the loop use a switch/case statement for each operation:
  - if the operation is:
    - a number, set the number as the register value
    - push, push the register value, onto the stack and leave the value in the register
    - add, pop a value from the stack and add it to the register value, storing the result in the 
    register
    - sub, pop a value from the stack and subtract it from the register value, storing the result
    in the register
    - mult, pop a value from the stack and multiply it by the register value, storing the result
    in the register
    - div, pop value from the stack and divide the register value by the popped stack value, storing
     the integer result back in the register
     - remainder, pop a value from the stack and divide the register value by the popped stack value,
     storing the integer remainder of the division back in the register
     - pop, remove the topmost item from the stack and place it in the register
     - print, print the register value
*/

function minilang(commands) {
  let operations = commands.split(' ');
  let stack = [];
  let register = 0;

  operations.forEach(operation => {
    let value;
    switch(operation) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        value = stack.pop();
        register += value;
        break;
      case 'SUB':
        value = stack.pop();
        register -= value;
        break;
      case 'MULT':
        value = stack.pop();
        register *= value;
        break;
      case 'DIV':
        value = stack.pop();
        register = Math.floor(register / value);
        break;
      case 'REMAINDER':
        value = stack.pop();
        register = Math.floor(register % value);
        break;
      case 'POP':
        value = stack.pop();
        register = value;
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(operation);
    }
  });
}

// Test Cases
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
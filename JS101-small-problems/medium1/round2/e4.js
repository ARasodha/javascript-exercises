/* E4 Stack Machine Interpretation:

Input: string
Output: number
Rules:
- Create a stack and register program
- We need to account for the following commands
  - Push, add, sub, mult, div, remainder, pop and print
- All operations are integer based (applies for div and remainder)
- a stack and register both need to be initialized
- Can assume that all arugments are valid program -- there will be no edge cases

Data Structure
- the stack is an array

Algorithm
- Create `stack` and initialize it to an empty array
- Create `register` and initlialize it to 0
- Split input string into individual words and iterate over each word
- For each word perform corresponding action
  - check if input is a number
    - use `isNumber` helper function - make sure it works for negative number
  - Use switch case statement for each action (element in string array

*/
function minilang(commands) {
  let listOfCommands = commands.split(' ');
  let stack = [];
  let register = 0;
  listOfCommands.forEach(command => {
    if (isNumber(command)) {
      register = Number(command);
    } else {
      let lastValue;
    switch (command) {
      case 'PUSH':
        stack.push(register)
        break;
      case 'ADD':
        lastValue = stack.pop();
        register += lastValue;
        break;
      case 'SUB':
        lastValue = stack.pop();
        register -= lastValue;
        break;
      case 'MULT':
        lastValue = stack.pop();
        register *= lastValue;
        break;
      case 'DIV':
        lastValue = stack.pop();
        register = Math.floor(register / lastValue);
        break;
      case 'REMAINDER':
        lastValue = stack.pop();
        register = Math.round(register % lastValue);
        break;
      case 'POP':
        lastValue = stack.pop();
        register = lastValue;
        break;
      case 'PRINT':
        console.log(register);
        break;
    }
  }
  })
}

function isNumber(num) {
  num = Number(num);
  return num >= 0 && num <= 9 || num <= -0 && num >= -9;
}

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

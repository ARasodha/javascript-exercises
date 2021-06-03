// Ex4 Stack Machine Interpretation:
/*
Input: string
Output; number
Rules
- write a function the implements a miniature stack and register based programming
language that has the folowing commands: n, push, add, sub, mult, div, remainder,
pop, print
- all operations are integers operations (only relevant for div and remainder)
- inititlaize the stack and register to [] and 0 respectively

Algorithm
- split input string of commands into an array
- use a switch case statement for each command
*/

function minilang(stringOfCommands) {
  let commands = stringOfCommands.split(' ');
  let register = 0;
  let stack = [];
  commands.forEach(command => {
    let value;
    switch (command) {
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
        register =  Math.floor(register / value);
        break;
      case 'REMAINDER':
         value = stack.pop();
        register = Math.floor(register % value);
        break;
      case 'POP':
        value = stack.pop();
        register = value
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = Number(command);
        break;
    }
  })
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

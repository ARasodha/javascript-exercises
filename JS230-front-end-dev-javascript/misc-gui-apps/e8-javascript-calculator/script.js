function calculate(calculation) {
  calculation = calculation.map(val => {
    if (val >= '0' && val <= '9') {
      return Number(val);
    } else return val;
  });

  let result;
  calculation.forEach((val, idx) => {
    let nextNumber =  Number(calculation[idx + 1]);
    if (idx === 0) {
      result = Number(val);
    } else if (typeof val !== 'number') {
      if (val === '+') {
        result += nextNumber;
      } else if (val === '-') {
        result -= nextNumber;
      } else if (val === '*') {
        result *= nextNumber;
      } else if (val === '/') {
        result = result / nextNumber;
      } else if (val === '%') {
        result = result % nextNumber;
      }
    }
  });

  return result;
}

document.addEventListener("DOMContentLoaded", event => {
  let calculatorSection = document.getElementById("calculator");
  let calculationDisplay = document.getElementById("calculation-display");
  let calculation = [];

  calculatorSection.addEventListener("click", event => {
    let button = event.target.value;
    let numberDisplay = document.getElementById("number-display");
    if (numberDisplay.textContent === '0') {
      numberDisplay.textContent = '';
    };

    if (event.target.tagName === 'BUTTON') {
      switch (button) {
        case '0':
          numberDisplay.textContent = numberDisplay.textContent + '0';
          break;
        case '1':
          numberDisplay.textContent = numberDisplay.textContent + '1';
          break;
        case '2':
          numberDisplay.textContent = numberDisplay.textContent + '2';
          break;
        case '3':
          numberDisplay.textContent = numberDisplay.textContent + '3';
          break;
        case '4':
          numberDisplay.textContent = numberDisplay.textContent + '4';
          break;
        case '5':
          numberDisplay.textContent = numberDisplay.textContent + '5';
          break;
        case '6':
          numberDisplay.textContent = numberDisplay.textContent + '6';
          break;
        case '7':
          numberDisplay.textContent = numberDisplay.textContent + '7';
          break;
        case '8':
          numberDisplay.textContent = numberDisplay.textContent + '8';
          break;
        case '9':
          numberDisplay.textContent = numberDisplay.textContent + '9';
          break;
        case 'c':
          numberDisplay.textContent = '0';
          calculation = [];
          break;
        case 'ce':
          numberDisplay.textContent = '0';
          calculationDisplay.textContent = '';
          calculation = [];
          break;
        case 'decimal':
          numberDisplay.textContent = numberDisplay.textContent + '.';
          break;
        case 'neg':
          numberDisplay.textContent = '-' + numberDisplay.textContent;
          break;
        case 'add':
          calculation.push(numberDisplay.textContent);
          numberDisplay.textContent = '0';
          operator = '+';
          calculation.push(operator);
          calculationDisplay.textContent = calculation.join(' ');
          break;
        case 'subtract':
          calculation.push(numberDisplay.textContent);
          numberDisplay.textContent = '0';
          operator = '-';
          calculation.push(operator);
          calculationDisplay.textContent = calculation.join(' ');
        break;
        case 'multiply':
          calculation.push(numberDisplay.textContent);
          numberDisplay.textContent = '0';
          operator = '*';
          calculation.push(operator);
          calculationDisplay.textContent = calculation.join(' ');
          break;
        case 'divide':
          calculation.push(numberDisplay.textContent);
          numberDisplay.textContent = '0';
          operator = '/';
          calculation.push(operator);
          calculationDisplay.textContent = calculation.join(' ');
          break;
        case 'modulo':
          calculation.push(numberDisplay.textContent);
          numberDisplay.textContent = '0';
          operator = '%';
          calculation.push(operator);
          calculationDisplay.textContent = calculation.join(' ');
          break;
        case 'equals':
          calculation.push(numberDisplay.textContent);
          numberDisplay.textContent = calculate(calculation);
          calculationDisplay.textContent = '';
          break;
      }
    }
  });
});


function calculate(operandFirst, operandSecond, operator) {
  if (operator === "+") {
    return parseInt(operandFirst) + parseInt(operandSecond);
  } else if (operator === "-") {
    return parseInt(operandFirst) - parseInt(operandSecond);
  } else if (operator === "*") {
    return parseInt(operandFirst) * parseInt(operandSecond);
  } else if (operator === "/") {
    return Math.floor(parseInt(operandFirst) / parseInt(operandSecond));
  }
}

function solve(expression) {
  // let expression = reversePolishNotationString.split(" ");
  let stack = [];

  for (let i = 0; i < expression.length; i++) {
    if (!isNaN(expression[i]) && isFinite(expression[i])) {
      stack.push(expression[i]);
    } else {
      let operandSecond = stack.pop();
      let operandFirst = stack.pop();
      let operator = expression[i];
      stack.push(calculate(operandFirst, operandSecond, operator));
    }
  }

  if (stack.length > 1) {
    return stack[stack.length - 1];
  }
  return stack[0];
}

console.log(
  solve(
    "1 8 / 3 -9 - / -1 7 + -10 -8 * + / -3 -9 + -7 0 + * 2 -8 * 2 7 / - - + 6 5 * 0 -8 * * -7 6 + -10 10 + + - -3 10 / 4 8 * * 7 -1 + -6 5 / - / - / 5 -7 + 3 4 / + 0 6 + 3 4 - - / -7 5 * 1 6 / * 2 10 / 1 10 + - + - -2 7 / -4 -7 * + 1 5 / 5 7 / * + 2 1 / -4 7 / + 6 4 * 4 9 / - + / + *".split(
      " "
    )
  )
);

function calculate(exp) {
  let calc = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.floor(a / b),
  };

  let stack = [];

  exp.forEach((op) => {
    stack.push(calc[op] ? calc[op](...stack.splice(-2)) : op);
  });

  return stack;
}

let exp =
  "1 8 / 3 -9 - / -1 7 + -10 -8 * + / -3 -9 + -7 0 + * 2 -8 * 2 7 / - - + 6 5 * 0 -8 * * -7 6 + -10 10 + + - -3 10 / 4 8 * * 7 -1 + -6 5 / - / - / 5 -7 + 3 4 / + 0 6 + 3 4 - - / -7 5 * 1 6 / * 2 10 / 1 10 + - + - -2 7 / -4 -7 * + 1 5 / 5 7 / * + 2 1 / -4 7 / + 6 4 * 4 9 / - + / + *".split(
    " "
  );

exp = exp.map((i) => {
  return Number(i) ? Number(i) : i;
});

console.log(calculate(exp));

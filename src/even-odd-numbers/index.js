const input = "6 -2 0";

const arrNumberInput = input
  .trim(" ")
  .split(" ")
  .map((num) => Number(num));

// const checkEven = (arrNumberInput) =>
//   arrNumberInput.map((item) => item % 2 === 0);

function checkEven(arrNumberInput) {
  return arrNumberInput.map((item) => item % 2 === 0);
}

const even = checkEven(arrNumberInput);

const checkEqual = (even) => even.every((item) => item === even[0]);

let answer;

if (checkEqual(even)) {
  answer = "WIN";
} else {
  answer = "FAIL";
}

console.log(answer);

"use strict";

// k - могут нажать в один момент времени на k клавиш каждый - k (1 ≤ k ≤ 5).
// const clicking = 3;
// const clicking = 4;
// const clicking = 4;
const clicking = Number("2");
console.log(`clicking - ${typeof clicking}`);

const generalClicking = clicking * 2;
console.log(`generalClicking - ${typeof generalClicking}`);

// тренажёр - simulator
// либо точка, либо цифра от 1 до 9
// let simulator = [
//   ["1", "2", "3", "1"],
//   ["2", ".", ".", "2"],
//   ["2", ".", ".", "2"],
//   ["2", ".", ".", "2"],
// ];
// let simulator = [
//   ["1", "1", "1", "1"],
//   ["9", "9", "9", "9"],
//   ["1", "1", "1", "1"],
//   ["9", "9", "1", "1"],
// ];
// let simulator = [
//   ["1", "1", "1", "1"],
//   ["1", "1", "1", "1"],
//   ["1", "1", "1", "1"],
//   ["1", "1", "1", "1"],
// ];

// let simulator = [
//   [".", ".", ".", "."],
//   [".", ".", ".", "."],
//   [".", ".", ".", "."],
//   [".", ".", ".", "."],
// ];

let simulator = [
  ["1", "1", "1", "1"],
  ["9", "9", "9", "9"],
  ["8", "8", "8", "8"],
  ["1", ".", "9", "8"],
];

const checkOccurrence = (simulator, target) => {
  let counter = 0;

  for (let simulatorItem of simulator.flat()) {
    if (simulatorItem == target) counter++;
  }

  return counter;
};

const searchMaxPoints = (generalClicking, simulator) => {
  let maxPoints = 0;
  const numbers = [];
  const TIMER = 9;

  for (let i = 1; i <= TIMER; i++) {
    let result = checkOccurrence(simulator, i);
    console.log(`result - ${result}`);
    if (result !== 0) numbers.push(result);
  }

  console.log(numbers);

  for (let i = 0; i < numbers.length; i++) {
    console.log(typeof numbers[i]);
    if (numbers[i] <= generalClicking) maxPoints++;
  }
  console.log(`maxPoints - ${typeof maxPoints}`);
  console.log(`maxPoints - ${maxPoints}`);

  return maxPoints;
};

console.log(searchMaxPoints(generalClicking, simulator));

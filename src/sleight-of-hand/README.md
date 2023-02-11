```javascript
const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function checkOccurrence(simulator, target) {
  let counter = 0;

  for (let simulatorItem of simulator.flat()) {
    if (simulatorItem == target) counter++;
  }

  return counter;
}

function searchMaxPoints(generalClicking, simulator) {
  let maxPoints = 0;
  const numbers = [];
  const TIMER = 9;

  for (let i = 1; i <= TIMER; i++) {
    let result = checkOccurrence(simulator, i);
    if (result !== 0) numbers.push(result);
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= generalClicking) maxPoints++;
  }

  return maxPoints;
}

function createSimulator(i) {
  return _inputLines[i]
    .trim(" ")
    .split("")
    .map((num) => Number(num));
}

function solve() {
  const clicking = Number(_inputLines[0]);
  const NUMBER_PLAYERS = 2;
  const generalClicking = clicking * NUMBER_PLAYERS;

  const INPUT_KEY_ROW = 4;
  const simulator = [];
  for (let i = 1; i <= INPUT_KEY_ROW; i++) {
    simulator.push(createSimulator(i));
  }

  const answer = searchMaxPoints(generalClicking, simulator);
  process.stdout.write(String(answer));
}
```

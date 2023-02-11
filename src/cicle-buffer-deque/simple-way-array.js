class Deque {
  constructor(n) {
    this.deque = [];
    this.maxSize = n;
    this.size = 0;
  }

  isEmpty = () => this.size === 0;

  isFull = () => this.size === this.maxSize;

  pushBack(value) {
    if (this.isFull()) return "error";
    this.size++;
    this.deque.push(value);
  }

  pushFront(value) {
    if (this.isFull()) return "error";
    this.size++;
    this.deque.unshift(value);
  }

  popBack() {
    if (this.isEmpty()) return "error";
    this.size--;
    return this.deque.pop();
  }

  popFront() {
    if (this.isEmpty()) return "error";
    this.size--;
    return this.deque.shift();
  }
}

function runCommand(deque, command) {
  const arrCmd = command.trim().split(" ");
  let result;

  switch (arrCmd[0]) {
    case "push_front":
      result = deque.pushFront(+arrCmd[1]);
      break;
    case "push_back":
      result = deque.pushBack(+arrCmd[1]);
      break;
    case "pop_back":
      result = deque.popBack();
      break;
    case "pop_front":
      result = deque.popFront();
      break;
    default:
      break;
  }

  return result;
}

// const _inputLines1 = [
//   6,
//   6,
//   "push_front -201",
//   "push_back 959",
//   "push_back 102",
//   "push_front 20",
//   "pop_front",
//   "pop_back",
// ];

// const _outputLines1 = [20, 102];

const _inputLines = [
  7,
  10,
  "push_front -855",
  "push_front 0",
  "pop_back",
  "pop_back",
  "push_back 844",
  "pop_back",
  "push_back 823",
];

const _outputLines = [-855, 0, 844];

function solve() {
  const cmdTotal = Number(_inputLines[0]);
  const maxSizeDeq = Number(_inputLines[1]);

  let deque = new Deque(maxSizeDeq);

  for (let i = 2; i <= cmdTotal + 1; i++) {
    const result = runCommand(deque, _inputLines[i]);
    if (typeof result !== "undefined") console.log(result);
  }
}

solve();

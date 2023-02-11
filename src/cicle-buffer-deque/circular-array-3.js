class Deque {
  constructor(maxSizeDeq) {
    this.deque = {};
    this.head = 0;
    this.tail = 1;
    this.size = 0;
    this.maxSize = maxSizeDeq;
  }
  pushFront(value) {
    if (this.isFull()) return "error";
    this.size++;
    this.head = (this.head + 1) % this.maxSize;
    this.deque[this.head] = value;
  }
  popFront() {
    // if (!this.size) return "error";
    if (this.isEmpty()) return "error";
    // let value = this.peekFront();
    let value = this.deque[this.head];
    this.size--;
    delete this.deque[this.head];
    this.head = (this.head || this.maxSize) - 1;
    return value;
  }
  // peekFront() {
  //   if (this.size) return this.deque[this.head];
  // }
  pushBack(value) {
    if (this.size >= this.maxSize) return "error";
    this.size++;
    this.tail = (this.tail || this.maxSize) - 1;
    this.deque[this.tail] = value;
  }
  popBack() {
    // if (!this.size) return "error";
    if (this.isEmpty()) return "error";
    // let value = this.peekBack();
    let value = this.deque[this.tail];
    this.size--;
    delete this.deque[this.tail];
    this.tail = (this.tail + 1) % this.maxSize;
    return value;
  }
  // peekBack() {
  //   if (this.size) return this.deque[this.tail];
  // }
  isEmpty() {
    return this.size === 0;
  }
  isFull() {
    return this.size === this.maxSize;
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
  // const cmdTotal = Number(_inputLines[0]);
  const maxSizeDeq = Number(_inputLines[1]);

  let deque = new Deque(maxSizeDeq);

  for (let i = 2; i <= _inputLines.length - 1; i++) {
    const result = runCommand(deque, _inputLines[i]);
    if (typeof result !== "undefined") console.log(result);
  }
}

solve();

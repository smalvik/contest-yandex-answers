class Deque {
  constructor(n) {
    this.deque = Array(n).fill(null);
    this.maxN = n;
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.maxN;
  }

  pushFront(value) {
    if (this.isFull()) {
      console.log("error");
    } else {
      this.size++;
      this.deque[this.tail] = value;
      this.tail = (this.tail + 1) % this.maxN;
    }
  }

  popBack() {
    if (this.isEmpty()) {
      console.log("error");
    } else {
      const value = this.peekBack();
      this.size--;
      this.deque[this.tail] = null;
      this.tail = (this.tail + 1) % this.maxN;
      console.log(value);
    }
  }

  pushBack(value) {
    if (this.isFull()) {
      console.log("error");
    } else {
      this.size++;
      this.head = (this.head || this.maxN) - 1;
      this.deque[this.head] = value;
    }
  }

  popFront() {
    if (this.isEmpty()) {
      console.log("error");
    } else {
      const value = this.deque[this.head];
      this.deque[this.head] = null;
      this.head = (this.head + 1) % this.maxN;
      this.size--;
      console.log(value);
    }
  }

  peekFront() {
    if (this.size) return this.deque[this.head];
  }

  peekBack() {
    if (this.size) return this.deque[this.tail];
  }
}

function runCommand(deque, command) {
  const arrCmd = command.trim().split(" ");

  switch (arrCmd[0]) {
    case "push_front":
      deque.pushFront(+arrCmd[1]);
      break;
    case "push_back":
      deque.pushBack(+arrCmd[1]);
      break;
    case "pop_back":
      deque.popBack();
      break;
    case "pop_front":
      deque.popFront();
      break;
    default:
      break;
  }
}

const n = 6; // количество команд
const m = 6; // размер дека

const cmd1 = "push_front -201";
const cmd2 = "push_back 959";
const cmd3 = "push_back 102";
const cmd4 = "push_front 20";

const cmd5 = "push_front 55";
const cmd6 = "push_front 66";

const cmdPopFront = "pop_front";
const cmdPopBack = "pop_back";

let deque = new Deque(m);
console.log(deque);

// runCommand(deque, cmd1);
// console.log(deque);

// runCommand(deque, cmd1);
// console.log(deque);

runCommand(deque, cmd4);
console.log(deque);

runCommand(deque, cmd2);
console.log(deque);

// runCommand(deque, cmdPopFront);
// console.log(deque);

// runCommand(deque, cmdPopBack);
// console.log(deque);

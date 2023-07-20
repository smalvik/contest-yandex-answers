const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [
  "5",
  "alla 4 100",
  "gena 6 1000",
  "gosha 2 90",
  "rita 2 90",
  "timofey 4 80",
];
const participants = [];

/**
 * Класс Участника
 */
class Person {
  constructor(name, solved, penalty) {
    this.name = name;
    this.solved = solved;
    this.penalty = penalty;
  }
  /**
   * @returns {string}
   */
  getName() {
    return this.name;
  }
}

rl.on("line", (line) => {
  input.push(line);
  if (input.length === parseInt(input[0], 10) + 1) {
    for (let i = 1; i < input.length; i++) {
      [username, solved, penalty] = input[i].split(" ");
      participants.push(
        new Person(username, -parseInt(solved, 10), parseInt(penalty, 10))
      );
    }
    let result = heapSort(participants);
    for (let participant of result) {
      console.log(participant.getName());
    }
    rl.close();
  }
});

// Пирамидальная сортировка
/**
 * @param {object} arr
 * */
function heapSort(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2); i >= 0; i--) {
    heapify(arr, n, i);
  }

  for (let j = n - 1; j >= 0; j--) {
    swap(arr, 0, j);
    heapify(arr, j, 0);
  }
  return arr;
}
//  Метод перемещает корень в конец
/**
 * @param {object} arr
 * @param {number} i
 * @param {number} j
 * */
function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
// Метод для преобразования в двоичную кучу поддерева с корневым узлом i,
/**
 * @param {object} arr
 * @param {number} n
 * @param {number} i
 * */
function heapify(arr, n, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;
  // Если левый дочерний элемент больше корня
  if (left < n && isGreaterRoot(arr[left], arr[max])) {
    max = left;
  }
  // Если правый дочерний элемент больше корня
  if (right < n && isGreaterRoot(arr[right], arr[max])) {
    max = right;
  }
  // Если самый большой элемент не корень
  if (max !== i) {
    swap(arr, i, max);
    heapify(arr, n, max);
  }
}

// Метод сравнения потомка с корнем
/**
 * @param {object} child
 * @param {object} root
 * */
function isGreaterRoot(child, root) {
  return (
    child.solved > root.solved ||
    (child.solved === root.solved && child.penalty > root.penalty) ||
    (child.solved === root.solved &&
      child.penalty === root.penalty &&
      child.name > root.name)
  );
}

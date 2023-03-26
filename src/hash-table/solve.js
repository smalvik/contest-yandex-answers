_inputLines = [
  "10",
  "get 1",
  "put 1 10",
  "put 2 4",
  "get 1",
  "get 2",
  "delete 2",
  "get 2",
  "put 1 5",
  "get 1",
  "delete 2",
];

class HashTable {
  constructor(size = 10 ** 5) {
    this.size = size;
    this.keys = new Array(size);
    this.values = new Array(size);
  }

  hash(value) {
    return value % this.size;
  }

  rehash(value) {
    return this.hash(value + 1);
  }

  searchPosition(position, key) {
    while (this.keys[position] && this.keys[position] !== key) {
      position = this.rehash(position);
    }
    return position;
  }

  get(key) {
    let position = this.searchPosition(this.hash(key), key);
    return this.values[position] || "None";
  }

  put(key, value) {
    let hash = this.hash(key);
    if (!this.keys[hash]) {
      this.keys[hash] = key;
      this.values[hash] = value;
    } else if (this.keys[hash] === key) {
      this.values[hash] = value;
    } else {
      let nextHash = this.searchPosition(this.rehash(hash), key);
      if (!this.keys[nextHash]) {
        this.keys[nextHash] = key;
        this.values[nextHash] = value;
      } else {
        this.values[nextHash] = value;
      }
    }
  }

  delete(key) {
    let position = this.searchPosition(this.hash(key), key);
    let deletedValue = this.values[position];
    if (deletedValue) {
      this.put(key, undefined);
      return deletedValue;
    } else {
      return "None";
    }
  }
}

function runCommand(hash, command) {
  const arrCmd = command.trim().split(" ");
  let result, key, value;

  switch (arrCmd[0]) {
    case "put":
      key = Number(arrCmd[1]);
      value = Number(arrCmd[2]);
      result = hash.put(key, value);
      break;

    case "get":
      key = Number(arrCmd[1]);
      result = hash.get(key);
      break;

    case "delete":
      key = Number(arrCmd[1]);
      result = hash.delete(key);
      break;

    default:
      break;
  }

  return result;
}

function solve() {
  const n = Number(_inputLines[0]);
  const hash = new HashTable(n);

  for (let i = 1; i <= _inputLines.length - 1; i++) {
    const result = runCommand(hash, _inputLines[i]);
    if (typeof result !== "undefined") console.log(result);
  }
}

solve();

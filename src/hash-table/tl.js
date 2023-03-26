const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

let result = "";

_reader.on("line", (line) => {
  _inputLines.push(line);
});

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
    result += `\n${this.values[position] || "None"}`;
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
      result += `\n${deletedValue}`;
      this.put(key, undefined);
    } else {
      result += "\nNone";
    }
  }
}

process.stdin.on("end", solve);

function solve() {
  const n = Number(_inputLines[0]);
  const actions = _inputLines.slice(1);

  const hash = new HashTable(n);

  for (let i = 0; i < actions.length; i++) {
    if (actions[i].includes("get")) {
      const ind = parseInt(actions[i].split(" ")[1], 10);
      hash.get(ind);
    }

    if (actions[i].includes("put")) {
      const ind = parseInt(actions[i].split(" ")[1], 10);
      const value = parseInt(actions[i].split(" ")[2], 10);
      hash.put(ind, value);
    }

    if (actions[i].includes("delete")) {
      const ind = parseInt(actions[i].split(" ")[1], 10);
      hash.delete(ind);
    }
  }
  console.log(result.slice(1));
}

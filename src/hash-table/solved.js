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
  constructor() {
    this.values = {};
    this.length = 0;
    this.size = 0;
  }

  calculateHash(key) {
    return key.toString().length % this.size;
  }

  add(key, value) {
    const hash = this.calculateHash(key);
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      this.length++;
    }
    this.values[hash][key] = value;
  }

  search(key) {
    const hash = this.calculateHash(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      return this.values[hash][key];
    } else {
      return null;
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

// //create object of type hash table
// const ht = new HashTable();
// //add data to the hash table ht
// ht.add("Canada", "300");
// ht.add("Germany", "100");
// ht.add("Italy", "50");

// //search
// console.log(ht.search("Germany"));

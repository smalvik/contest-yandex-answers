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

/**
 * Класс Хэш-таблица
 */
class HashTable {
  /**
   * @param {number} size
   */
  constructor(size = 10 ** 5) {
    this.size = size;
    this.keys = new Array(size);
    this.values = new Array(size);
  }

  /**
   * Метод хеширования
   * @param {number} value
   * @returns number
   */
  hashFn(value) {
    return value % this.size;
  }

  /**
   * Метод рехеширования
   * @param {number} value
   * @returns number
   */
  rehashFn(value) {
    return this.hashFn(value + 1);
  }

  /**
   * Метод поиска
   * @param {number} key
   * @param {number} position
   */
  findPosition(position, key) {
    while (this.keys[position] && this.keys[position] !== key) {
      position = this.rehashFn(position);
    }
    return position;
  }

  /**
   * Метод получает значение по ключу
   * @param {number} key
   */
  get(key) {
    let position = this.findPosition(this.hashFn(key), key);
    return this.values[position] || "None";
    // result += `\n${this.values[position] || "None"}`;
  }

  /**
   * Метод добавляет пары ключ-значение
   * @param {number} key
   * @param {number} value
   */
  put(key, value) {
    let hash = this.hashFn(key);
    if (!this.keys[hash]) {
      this.keys[hash] = key;
      this.values[hash] = value;
    } else if (this.keys[hash] === key) {
      this.values[hash] = value;
    } else {
      let nextHash = this.findPosition(this.rehashFn(hash), key);
      if (!this.keys[nextHash]) {
        this.keys[nextHash] = key;
        this.values[nextHash] = value;
      } else {
        this.values[nextHash] = value;
      }
    }
  }

  /**
   * Метод удаляет значение по ключу
   * @param {number} key
   */
  delete(key) {
    let position = this.findPosition(this.hashFn(key), key);
    let deletedValue = this.values[position];
    if (deletedValue) {
      this.put(key, undefined);
      return deletedValue;
      // result += `\n${deletedValue}`;
    } else {
      return "None";
      // result += "\nNone";
    }
  }
}

function runCommand(hash, command) {
  const arrCmd = command.trim().split(" ");
  let result, key, value;
  // console.log(arrCmd[0]);
  // console.log(arrCmd[1]);
  // console.log(arrCmd[2]);

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
  // console.log(hash);

  for (let i = 1; i <= _inputLines.length - 1; i++) {
    // console.log(_inputLines[i]);
    const result = runCommand(hash, _inputLines[i]);
    if (typeof result !== "undefined") console.log(result);
  }
}

solve();

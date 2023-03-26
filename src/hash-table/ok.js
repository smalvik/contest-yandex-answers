const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let result = "";
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
    result += `\n${this.values[position] || "None"}`;
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
      result += `\n${deletedValue}`;
      this.put(key, undefined);
    } else {
      result += "\nNone";
    }
  }
}

rl.on("line", (line) => {
  input.push(line);

  if (input.length === parseInt(input[0], 10) + 1) {
    const cmds = input.slice(1);
    const hash = new HashTable(parseInt(input[0], 10));
    for (let i = 0; i < cmds.length; i++) {
      if (cmds[i].includes("get")) {
        const ind = parseInt(cmds[i].split(" ")[1], 10);
        hash.get(ind);
      }

      if (cmds[i].includes("put")) {
        const ind = parseInt(cmds[i].split(" ")[1], 10);
        const value = parseInt(cmds[i].split(" ")[2], 10);
        hash.put(ind, value);
      }

      if (cmds[i].includes("delete")) {
        const ind = parseInt(cmds[i].split(" ")[1], 10);
        hash.delete(ind);
      }
    }
    console.log(result.slice(1));
    rl.close();
  }
});

// function genBinary(n, prefix) {
//   if (n === 0) {
//     console.log(prefix);
//     return;
//   }
//   genBinary(n - 1, prefix + "0");
//   genBinary(n - 1, prefix + "1");
// }

// genBinary(3, "");

const keypad = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function findCombinations(result, keys, answer = "") {
  if (keys.length == 0) {
    console.log(`${answer}`);
    // combinations.push(answer);
    // combinations.add(answer);
    result = result + " " + answer;
    return;
  }

  // console.log(`index - ${keys.charAt(0)}`);
  const key = keypad[parseInt(keys.charAt(0))];
  // console.log(`key - ${key}`);

  const nextKeys = keys.substring(1);
  // console.log(`nextKeys - ${nextKeys}`);

  const countLetterOnKey = key.length;

  for (let i = 0; i < countLetterOnKey; i++) {
    let letter = key.charAt(i);
    // console.log(`answer - ${answer}`);
    // console.log(`letter - ${letter}`);
    findCombinations(result, nextKeys, answer + letter);
  }
}

function findAllCombinations(keys) {
  // const combinations = [];
  // let count = 0;
  // const combinations = new Set();
  let result = "";
  findCombinations(result, keys);
  // return combinations;
  return result;
}

function solve() {
  const keys = "689372357";

  const result = findAllCombinations(keys);
  console.log(result);
  // console.log(...combinations);
}

solve();

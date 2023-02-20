function findCombinations(keyboard, keys, combinations, index, result = "") {
  if (index === -1) {
    combinations.add(result);
    return;
  }

  const digit = keys[index];
  console.log(`digit - ${digit}`);

  const length = keyboard[digit].length;
  console.log(`length - ${length}`);

  for (i = 0; i < length; i++) {
    findCombinations(
      keyboard,
      keys,
      combinations,
      index - 1,
      keyboard[digit][i] + result
    );
  }
}

function findAllCombinations(keyboard, keys) {
  let combinations = new Set();

  const index = keys.length - 1;

  findCombinations(keyboard, keys, combinations, index);
  return combinations;
}

function solve() {
  const keyboard = {
    2: ["A", "B", "C"],
    3: ["D", "E", "F"],
    4: ["G", "H", "I"],
    5: ["J", "K", "L"],
    6: ["M", "N", "O"],
    7: ["P", "Q", "R", "S"],
    8: ["T", "U", "V"],
    9: ["W", "X", "Y", "Z"],
  };

  const keys = [2, 3];

  const combinations = findAllCombinations(keyboard, keys);
  console.log(combinations);
}

solve();

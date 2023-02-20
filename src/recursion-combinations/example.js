// Javascript program to implement the
// above approach
let hashTable = [
  "",
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz",
];

// A recursive function to print all possible
// words that can be obtained by input number[]
// of size n. The output words are one by one
// stored in output[]
function printWordsUtil(number, curr, output, n, combinations) {
  // Base case, if current output
  // word is prepared
  if (curr == n) {
    console.log(output.join(""));
    combinations.push(output.join(""));
    return;
  }

  // Try all 3 possible characters for current
  // digit in number[] and recur for remaining digits
  for (let i = 0; i < hashTable[number[curr]].length; i++) {
    output.push(hashTable[number[curr]][i]);
    printWordsUtil(number, curr + 1, output, n, combinations);

    output.pop();

    if (number[curr] == 0 || number[curr] == 1) return;
  }
}

// A wrapper over printWordsUtil(). It creates
// an output array and calls printWordsUtil()
function printWords(number, n) {
  const combinations = [];
  printWordsUtil(number, 0, [], n, combinations);
  return combinations;
}

// Driver code
let number = [6, 8, 9, 3, 7, 2, 3, 5, 7];
let n = number.length;

const combinations = printWords(number, n);
console.log(...combinations);

// This code is contributed by avanitrachhadiya2155

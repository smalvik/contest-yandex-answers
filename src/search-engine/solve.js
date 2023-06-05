_inputLines = [
  "3",
  "i like dfs and bfs",
  "i like dfs dfs",
  "i like bfs with bfs and bfs",
  "1",
  "dfs dfs dfs dfs bfs",
];

function createDictionary(documents) {
  for (let i = 0; i < documents.length; i++) {
    for (let j = 0; j < documents[i].length; j++) {
      const word = documents[i][j];

      if (!dictionary[word]) {
        dictionary[word] = { [i]: 0 };
      }

      const wordDictionary = dictionary[word];

      if (!wordDictionary[i]) {
        wordDictionary[i] = 0;
      }
      wordDictionary[i] = wordDictionary[i] + 1;
    }
  }
}

function findRelevantDocs(requests) {
  requests.forEach((phrase) => {
    const wordsSet = new Set(phrase);

    const relevant = {};

    for (let word of wordsSet) {
      if (dictionary[word]) {
        for (let [key, value] of Object.entries(dictionary[word])) {
          if (!relevant[key]) {
            relevant[key] = 0;
          }
          relevant[key] = relevant[key] + value;
        }
      }
    }

    getRelevant(relevant);
  });
}

function getRelevant(relevant) {
  let sorted = [];
  let count = 0;
  let sequence = "";
  const limit = 5;

  for (let el in relevant) {
    sorted.push([el, relevant[el]]);
  }

  sorted = sorted.sort((a, b) => comparator(a, b));

  for (let [key] of sorted) {
    sequence += `${Number(key) + 1} `;
    count++;
    if (count >= limit) {
      break;
    }
  }

  result += `${sequence}\n`;
}

function comparator(a, b) {
  const [indexA, valA] = a;
  const [indexB, valB] = b;

  if (valA === valB) {
    return indexA - indexB;
  }

  return valB - valA;
}

const dictionary = {};

let result = "";

function setArrays(inputArr, start, end) {
  const array = [];
  for (let i = start; i < end; i++) {
    array.push(inputArr[i].split(" "));
  }
  return array;
}

function solve() {
  const documentsCount = Number(_inputLines[0]);
  const documentsArr = setArrays(_inputLines, 1, documentsCount + 1);

  const requestsArr = setArrays(
    _inputLines,
    documentsCount + 2,
    _inputLines.length
  );

  createDictionary(documentsArr);

  findRelevantDocs(requestsArr);

  console.log(result);
}

solve();

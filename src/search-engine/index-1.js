_inputLines = [
  "3",
  "i like dfs and bfs",
  "i like dfs dfs",
  "i like bfs with bfs and bfs",
  "1",
  "dfs dfs dfs dfs bfs",
];

/**
 * Функция создаёт словарь.
 * Словарь - это хэш таблица, где ключами является слово из документов,
 * а значения это объект сколько раз это слово встречается в запросах.
 * @param {array} documents
 */
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
  console.log("\ndict");
  console.log(dictionary);
}

/**
 * Метод вычисляет релевантные документы на основе словаря
 * @param {*} requests
 */
function findRelevantDocs(requests) {
  requests.forEach((phrase) => {
    const wordsSet = new Set(phrase);
    console.log("\nwordsSet");
    console.log(wordsSet);

    const relevant = {};

    for (let word of wordsSet) {
      console.log("\nword");
      console.log(word);
      if (dictionary[word]) {
        for (let [key, value] of Object.entries(dictionary[word])) {
          console.log(`key - ${key}; value - ${value}`);

          if (!relevant[key]) {
            relevant[key] = 0;
          }
          relevant[key] = relevant[key] + value;
        }
      }
    }

    console.log("\nrelevant");
    console.log(relevant);

    getRelevant(relevant);
  });
}

/**
 * Метод выводит самые релевантные индексы документов
 * для каждого запроса
 * @param {*} relevant
 */
function getRelevant(relevant) {
  let sorted = [];
  let count = 0;
  let sequence = "";
  const limit = 5;

  for (let el in relevant) {
    sorted.push([el, relevant[el]]);
  }

  console.log("\nsorted");
  console.log(sorted);

  sorted = sorted.sort((a, b) => comparator(a, b));

  console.log("\nsorted");
  console.log(sorted);

  for (let [key] of sorted) {
    sequence += `${Number(key) + 1} `;
    count++;
    if (count >= limit) {
      break;
    }
  }

  console.log("\nsequence");
  console.log(sequence);

  result += `${sequence}\n`;
}

/**
 * Функция сравнивает значения и возвращает наибольшее,
 * если значения равны, тогда возвращает то, которое было раньше
 * @param {array} a
 * @param {array} b
 * @returns {number}
 *
 */
function comparator(a, b) {
  const [indexA, valA] = a;
  console.log(indexA, valA);

  const [indexB, valB] = b;
  console.log(indexB, valB);

  console.log("indexA - indexB");
  console.log(indexA - indexB);

  console.log("valA - valB");
  console.log(valA - valB);

  if (valA === valB) {
    return indexA - indexB;
  }

  return valB - valA;
}

const dictionary = {};

let result = "";

/**
 * Функция создает коллекции из диапазона массива
 * @param {array} inputArr
 * @param {number} start
 * @param {number} end
 * @return {array}
 *
 */
function setArrays(inputArr, start, end) {
  const array = [];
  for (let i = start; i < end; i++) {
    array.push(inputArr[i].split(" "));
  }
  return array;
}

function solve() {
  const documentsCount = Number(_inputLines[0]);
  // console.log(documentsCount);

  const requestsCount = Number(_inputLines[documentsCount + 1]);
  // console.log(requestsCount);

  const documentsArr = setArrays(_inputLines, 1, documentsCount + 1);
  // console.log(documentsArr);

  const requestsArr = setArrays(
    _inputLines,
    documentsCount + 2,
    _inputLines.length
  );
  // console.log(requestsArr);

  createDictionary(documentsArr);

  findRelevantDocs(requestsArr);

  console.log(result);
}

solve();

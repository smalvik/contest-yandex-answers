/**
 * ПРИНЦИП РАБОТЫ
 * Основной принцип работы  - создание так называемого "поискового индекса".
 *
 * 1. Проходимся по всем документам и создаем для каждого документа
 * хеш таблицу со словами и их количество в документе. (searchList)
 *
 * 2. Так же создаем хеш таблицу всех слов из документов и индексы документов,
 * где встречаются эти слова. (searchMap)
 *
 * 3. После проходимся по всем запросам и находим релевантность,
 * далее сортируем по этому признаку и берем самые большие значения
 *
 * ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ
 * За счет использования преимуществ хеш таблиц - доступ за O(1)
 * и формированию "поискового индекса"
 *
 * ВРЕМЕННАЯ СЛОЖНОСТЬ
 * Самая долгая операция во всем коде - сортировка, она происходит
 * за O(nlogn). Остальные операции мы можем опустить, т.к они производятся
 * за линейное время и с дополнительной памятью
 */

_inputLines = [
  "3",
  "i like dfs and bfs",
  "i like dfs dfs",
  "i like bfs with bfs and bfs",
  "1",
  "dfs dfs dfs dfs bfs",
];

console.log(searchSystem(_inputLines));

function searchSystem(elements) {
  const docCount = +elements[0];
  console.log(`docCount - ${docCount}`);

  const documents = elements.slice(1, docCount + 1);
  console.log("documents");
  console.log(documents);

  const reqCount = +elements[docCount + 1];
  console.log(`reqCount - ${reqCount}`);

  const requests = elements.slice(docCount + 2);
  console.log("requests");
  console.log(requests);

  const searchList = getDocsList(documents);
  console.log("searchList");
  console.log(searchList);

  const searchMap = new Map();

  searchList.forEach((item, index) => {
    for (const [key] of item) {
      if (searchMap.has(key)) {
        const collection = searchMap.get(key);
        collection.push(index);
        searchMap.set(key, collection);
      } else {
        searchMap.set(key, [index]);
      }
    }
  });

  console.log("searchMap");
  console.log(searchMap);

  const requestList = requests.map((item) => {
    return item.split(" ").reduce((prev, curr) => {
      prev[curr] = null;
      return prev;
    }, {});
  });

  console.log("requestList");
  console.log(requestList);

  let answer = new Array(reqCount);

  requestList.forEach((req, reqIndex) => {
    console.log("req");
    console.log(req);

    console.log("reqIndex");
    console.log(reqIndex);

    Object.keys(req).forEach((reqWord) => {
      console.log("reqWord");
      console.log(reqWord);

      if (searchMap.has(reqWord)) {
        searchMap.get(reqWord).forEach((index) => {
          console.log(`index - ${index}`);

          const answerReqIndex = answer[reqIndex];
          console.log("answerReqIndex");
          console.log(answerReqIndex);

          if (answerReqIndex) {
            if (answerReqIndex.hasOwnProperty(index)) {
              answerReqIndex[index] += searchList[index].get(reqWord);
            } else {
              answerReqIndex[index] = searchList[index].get(reqWord);
            }
          } else {
            const arr = {};
            arr[index] = searchList[index].get(reqWord);
            console.log("arr[index]");
            console.log(arr[index]);
            answer[reqIndex] = arr;
          }
        });
      }
    });
  });

  console.log("answer");
  console.log(answer);

  const result = answer.map((item) =>
    Object.keys(item)
      .map((key) => [item[key], +key])
      .sort(comparator)
      .slice(0, 5)
  );

  console.log("result");
  console.log(result);

  return result
    .map((item) => item.map((element) => element[1] + 1).join(" "))
    .join("\n");
}

function getDocsList(docs) {
  let result = [];

  docs.forEach((item) => {
    let dict = new Map();

    item.split(" ").forEach((word) => {
      if (dict.has(word)) {
        dict.set(word, dict.get(word) + 1);
      } else {
        dict.set(word, 1);
      }
    });

    result.push(dict);
  });

  return result;
}

function comparator(a, b) {
  const [valA, indexA] = a;
  const [valB, indexB] = b;

  if (valA === valB) {
    return indexA - indexB;
  }

  return valB - valA;
}

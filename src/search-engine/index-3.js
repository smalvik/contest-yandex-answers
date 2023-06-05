/*
-- ПРИНЦИП РАБОТЫ --

Для того, чтобы максимально воспользоваться ресурсами машины, которые есть в условии, не жалеем память и создаем "оглавление" (tableOfContents).

Оглавление представляет собой словарь со словами из документов, где они встречаются и сколько раз.

Затем каждый поисковый запрос мы отфильтровываем по уникальным словам, чтобы не проходить по ним несколько раз и поочередно ищем в оглавлении
с подсчетом. 

Таким образом в счетчик попадут только документы с результатом и мы сразу выполним условие выводить только документы с результатом.

В конце сортируем результат и выдаем 5 максимальных.


-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
    Если учесть худший случай, когда каждый документ имеет уникальные слова, то создание словаря из N элементов + поиск по каждому слову запроса M
    (не будем учитывать спрэд в Set для создания массива уникальных слов запроса), то поиск займет O(M + N).


-- АСИМПТОТИЧЕСКАЯ СЛОЖНОСТЬ --
    Асимптотическая сложность с учетом создания объекта словаря при худшем случае, когда каждое слово есть в каждом документе, то O(M), где М - 
    количество слов

*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
});
let phase = 0;

const tableOfContents = {};
let numberOfDocs = 0;
let numberOfDoc = 1;
let numberOfSearchStrings = 0;

rl.on("line", (input) => {
  if (phase === 0) {
    numberOfDocs = parseInt(input);
  }

  if (phase > 0 && phase <= numberOfDocs) {
    input.split(" ").forEach((word) => {
      if (tableOfContents[word]) {
        let wordTable = tableOfContents[word];
        if (wordTable[numberOfDoc]) {
          wordTable[numberOfDoc] = wordTable[numberOfDoc] + 1;
        } else {
          wordTable[numberOfDoc] = 1;
        }
      } else {
        tableOfContents[word] = {
          [numberOfDoc]: 1,
        };
      }
    });
    numberOfDoc++;
  }

  if (phase > numberOfDocs && phase <= numberOfDocs + numberOfSearchStrings) {
    numberOfSearchStrings = parseInt(input);
  }

  if (phase > numberOfDocs + numberOfSearchStrings + 1) {
    const counter = {};

    [...new Set(input.split(" "))].forEach((searshWord) => {
      if (tableOfContents[searshWord]) {
        const docs = tableOfContents[searshWord];
        for (let doc in docs) {
          counter[doc] = counter[doc] ? counter[doc] + docs[doc] : docs[doc];
        }
      }
    });

    const result = Object.entries(counter)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map((item) => item[0])
      .join(" ");
    process.stdout.write(`${result}` + "\n");
  }
  phase++;
});

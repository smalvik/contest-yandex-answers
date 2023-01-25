# Чётные и нечётные числа

Представьте себе онлайн-игру для поездки в метро: игрок нажимает на кнопку, и на экране появляются три случайных числа. Если все три числа оказываются одной чётности, игрок выигрывает.

Напишите программу, которая по трём числам определяет, выиграл игрок или нет.

## Формат ввода (input)

В первой строке записаны три случайных целых числа a, b и c. Числа не превосходят 109 по модулю.

## Формат вывода (output)

Выведите «WIN», если игрок выиграл, и «FAIL» в противном случае.

## Пример 1

| Ввод   | Вывод |
| ------ | ----- |
| 1 2 -3 | FAIL  |

## Пример 2

| Ввод   | Вывод |
| ------ | ----- |
| 7 11 7 | WIN   |

## Пример 3

| Ввод   | Вывод |
| ------ | ----- |
| 6 -2 0 | WIN   |

## Решение 1

```javascript
const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function checkEven(arrNumberInput) {
  return arrNumberInput.map((item) => item % 2 === 0);
}

function checkEqual(even) {
  return even.every((item) => item === even[0]);
}

function solve() {
  const arrNumberInput = _inputLines[0]
    .trim(" ")
    .split(" ")
    .map((num) => Number(num));

  const even = checkEven(arrNumberInput);
  let answer;
  if (checkEqual(even)) {
    answer = "WIN";
  } else {
    answer = "FAIL";
  }

  process.stdout.write(`${answer}`);
}
```

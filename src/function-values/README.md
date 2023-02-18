# Значения функции

## Задача

Вася делает тест по математике: вычисляет значение функций в различных точках. Стоит отличная погода, и друзья зовут Васю гулять. Но мальчик решил сначала закончить тест и только после этого идти к друзьям. К сожалению, Вася пока не умеет программировать. Зато вы умеете. Помогите Васе написать код функции, вычисляющей y = ax^2 + bx + c. Напишите программу, которая будет по коэффициентам a, b, c и числу x выводить значение функции в точке x.

## Формат ввода (input)

На вход через пробел подаются целые числа a, x, b, c. В конце ввода находится перенос строки.

## Формат вывода (output)

Выведите одно число — значение функции в точке x.

## Пример 1

| Ввод       | Вывод |
| ---------- | ----- |
| -8 -5 -2 7 | -183  |

## Пример 2

| Ввод      | Вывод |
| --------- | ----- |
| 8 2 9 -10 | 40    |

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

function solve() {
  const arrNumberInput = _inputLines[0]
    .trim(" ")
    .split(" ")
    .map((num) => Number(num));
  const [a, x, b, c] = arrNumberInput;

  const answer = a * (x * x) + b * x + c;
  process.stdout.write(`${answer}`);
}
```
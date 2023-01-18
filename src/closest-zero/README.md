# Ближайший ноль (closest zero)

Distance of closest zero to every element

## Задача

Тимофей ищет место, чтобы построить себе дом. Улица, на которой он хочет жить, имеет длину n, то есть состоит из n одинаковых идущих подряд участков. Каждый участок либо пустой, либо на нём уже построен дом.

Общительный Тимофей не хочет жить далеко от других людей на этой улице. Поэтому ему важно для каждого участка знать расстояние до ближайшего пустого участка. Если участок пустой, эта величина будет равна нулю — расстояние до самого себя.

Помогите Тимофею посчитать искомые расстояния. Для этого у вас есть карта улицы. Дома в городе Тимофея нумеровались в том порядке, в котором строились, поэтому их номера на карте никак не упорядочены. Пустые участки обозначены нулями.

## Формат ввода (input)

В первой строке дана длина улицы —– n (1 ≤ n ≤ 10^6). В следующей строке записаны n целых неотрицательных чисел — номера домов и обозначения пустых участков на карте (нули). Гарантируется, что в последовательности есть хотя бы один ноль. Номера домов (положительные числа) уникальны и не превосходят 10^9.

## Формат вывода (output)

Для каждого из участков выведите расстояние до ближайшего нуля. Числа выводите в одну строку, разделяя их пробелами.

## Пример 1

| Ввод      | Вывод     |
| --------- | --------- |
| 5         | 0 1 2 1 0 |
| 0 1 4 9 0 |           |

## Пример 2

| Ввод         | Вывод       |
| ------------ | ----------- |
| 6            | 0 1 2 3 4 5 |
| 0 7 9 4 8 20 |             |

## Пример 3

| Ввод          | Вывод         |
| ------------- | ------------- |
| 7             | 2 1 0 1 2 3 4 |
| 5 6 0 1 5 8 4 |               |

## Решение 1

Наивный подход (Naive Approach):

A naive approach is, for every element, slide towards left and find out the nearest 0 and again slide towards the right to find out the nearest zero if any, and print the minimum of both the distances. It will be space efficient but the time complexity will be high as we have to iterate for every element till we find the 0, and in worst case we may not find in one direction.

Наивный подход состоит в том, чтобы для каждого элемента скользить влево и находить ближайший 0, а затем снова скользить вправо, чтобы найти ближайший ноль, если он есть, и печатать минимум обоих расстояний. Это будет эффективно с точки зрения пространства, но временная сложность будет высокой, поскольку нам придется выполнять итерацию для каждого элемента, пока мы не найдем 0, а в худшем случае мы можем не найти в одном направлении.

Временная сложность (Time Complexity): O(n^2)
Вспомогательное пространство (Auxiliary Space): O(1)

## Решение 2

Эффективный подход (Efficient Approach):

An efficient approach is to use sliding window technique two time. One is traversing from right to left and other from left right.

Эффективным подходом является использование метода скользящего окна дважды. Один движется справа налево, а другой слева направо.

Initialize ans[0] with a max value. Iterate over array from left to right. If value in current position is 0, then set distance to 0, otherwise increase distance by 1. In each step, write value of distance to the answer array.

Инициализируйте ans[0] максимальным значением. Итерация по массиву слева направо. Если значение в текущей позиции равно 0, то установите расстояние равным 0, в противном случае увеличьте расстояние на 1. На каждом шаге записывайте значение расстояния в массив ответов.

Do the same thing but going from right to left. This will find closest zero to the right. Now we should store the minimum of current value of distance and value that’s already in answer array.

Сделайте то же самое, но двигаясь справа налево. Это найдет ближайший ноль справа. Теперь мы должны сохранить минимум текущего значения расстояния и значения, которое уже есть в массиве ответов.

```javascript
// javascript program to find closest
// 0 for every element
// Print the distance with zeroes of every element
function print_distance(arr, n) {
  // initializes an array of size n with 0
  let ans = Array(n).fill(0);

  // if first element is 0 then the distance
  // will be 0
  if (arr[0] == 0) ans[0] = 0;
  // if not 0 then initialize
  // with a maximum value
  else ans[0] = +2147483647;

  // traverse in loop from 1 to n and store
  // the distance from left
  for (i = 1; i < n; ++i) {
    // add 1 to the distance
    // from previous one
    ans[i] = ans[i - 1] + 1;

    // if the present element is
    // 0 then distance will be 0
    if (arr[i] == 0) ans[i] = 0;
  }

  // if last element is zero
  // then it will be 0 else
  // let the answer be what was
  // found when traveled
  // from left to right
  if (arr[n - 1] == 0) ans[n - 1] = 0;

  // traverse from right to
  // left and store the minimum
  // of distance if found from
  // right to left or left
  // to right
  for (i = n - 2; i >= 0; --i) {
    // store the minimum of distance
    // from left to right or right to left
    ans[i] = Math.min(ans[i], ans[i + 1] + 1);

    // if it is 0 then minimum
    // will always be 0
    if (arr[i] == 0) ans[i] = 0;
  }

  // print the answer array
  for (i = 0; i < n; ++i) document.write(ans[i] + " ");
}

// Driver code
const a = [2, 1, 0, 3, 0, 0, 3, 2, 4];
const n = a.length;
print_distance(a, n);
```

Output

```
2 1 0 1 0 0 1 2 3
```

Time complexity: O(n)
Auxiliary Space: O(n)

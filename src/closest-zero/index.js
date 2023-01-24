// javascript program to find closest 0 for every element
// программа javascript для поиска ближайших 0 для каждого элемента
// Print the distance with zeroes of every element
// Выведите расстояние с нулями каждого элемента
function print_distance(streetLength, arrStreetMap) {
  // initializes an array of size streetLength with 0
  // инициализирует массив размера streetLength с 0
  let result = Array(streetLength).fill(0);
  // альтернативный вариант по инициализации массива, является быстрым
  // let result = new Array(streetLength);
  // for (let i = 0; i < streetLength; ++i) result[i] = 0;

  // // if first element is 0 then the distance
  // // если первый элемент равен 0, то расстояние
  // // will be 0
  // // будет равно 0
  // if (arrStreetMap[0] == 0) result[0] = 0;
  // // if not 0 then initialize
  // // если не 0, то инициализируйте
  // // with a maximum value
  // // с максимальным значением
  // // else result[0] = +2147483647;
  // else result[0] = +1000000001;
  if (arrStreetMap[0] !== 0) result[0] = 1000000001;

  // traverse in loop from 1 to streetLength and store
  // пройдите в цикле от 1 до streetLength и сохраните
  // the distance from left
  // и запомните расстояние слева
  for (let i = 1; i < streetLength; i++) {
    // add 1 to the distance
    // from previous one
    // добавьте 1 к расстоянию от предыдущего
    result[i] = result[i - 1] + 1;

    // if the present element is
    // если текущий элемент равен 0,
    // 0 then distance will be 0
    // то расстояние будет равно 0
    if (arrStreetMap[i] == 0) result[i] = 0;
  }

  // if last element is zero
  // если последний элемент равен нулю
  // then it will be 0 else
  // тогда это будет 0 иначе
  // let the resultwer be what was
  // пусть ответ будет таким, каким был
  // found when traveled
  // найдено при перемещении
  // from left to right
  // слева направо
  if (arrStreetMap[streetLength - 1] == 0) result[streetLength - 1] = 0;

  // traverse from right to
  // left and store the minimum
  // of distance if found from
  // right to left or left
  // to right
  // перемещайтесь справа налево
  // и сохраняйте минимальное расстояние,
  // если оно найдено справа налево или слева направо
  for (let i = streetLength - 2; i >= 0; i--) {
    // store the minimum of distance
    // сохраняйте минимальное расстояние
    // from left to right or right to left
    // слева направо или справа налево
    result[i] = Math.min(result[i], result[i + 1] + 1);

    // if it is 0 then minimum
    // will always be 0
    // если оно равно 0,
    // то минимум всегда будет равен 0
    if (arrStreetMap[i] == 0) result[i] = 0;
  }

  // print the resultwer array
  // for (i = 0; i < streetLength; ++i) console.log(result[i] + " ");
  console.log(result);
}

// Driver code
const arrStreetMap = [2, 1, 0, 3, 0, 0, 3, 2, 4];
// const a = [0, 1, 4, 9, 0];
// const a = [0, 7, 9, 4, 8, 20];
const streetLength = arrStreetMap.length;
print_distance(streetLength, arrStreetMap);

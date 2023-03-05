/*
Функция merge принимает два отсортированных массива, 
сливает их в один отсортированный массив и возвращает его.

Если требуемая сигнатура имеет вид merge(array, left, mid, right), 
то первый массив задаётся полуинтервалом [left, mid) массива array, 
а второй – полуинтервалом [mid, right) массива array.
*/
function merge(arr, left, mid, right) {
  let leftArr = arr.slice(left, mid);
  console.log(`leftArr - ${leftArr}`);

  let rightArr = arr.slice(mid, right);
  console.log(`rightArr - ${rightArr}`);

  let leftArrIdx = 0;
  let rightArrIdx = 0;
  let result = [];

  while (result.length < leftArr.length + rightArr.length) {
    console.log(`leftArrIdx - ${leftArrIdx}`);
    console.log(`rightArrIdx - ${rightArrIdx}`);

    if (leftArr[leftArrIdx] <= rightArr[rightArrIdx]) {
      console.log(`leftArr[leftArrIdx] - ${leftArr[leftArrIdx]}`);
      result.push(leftArr[leftArrIdx]);
      leftArrIdx += 1;
    } else {
      console.log(`rightArr[rightArrIdx] - ${rightArr[rightArrIdx]}`);
      result.push(rightArr[rightArrIdx]);
      rightArrIdx += 1;
    }

    console.log(`result.length - ${result.length}`);

    console.log(`rightArr.length - ${rightArr.length}`);

    if (rightArr.length === rightArrIdx) {
      result = [...result, ...leftArr.slice(leftArrIdx)];
      break;
    }

    console.log(`leftArr.length - ${leftArr.length}`);

    if (leftArr.length === leftArrIdx) {
      result = [...result, ...rightArr.slice(rightArrIdx)];
      break;
    }

    console.log(`result - ${result}`);
    console.log(`==================`);
    console.log(``);
  }

  return result;
}

/*
Функция merge_sort принимает некоторый подмассив, 
который нужно отсортировать.

Подмассив задаётся полуинтервалом — его началом и концом. 

Функция должна отсортировать передаваемый в неё подмассив,
она ничего не возвращает.
*/

/*
Функция merge_sort разбивает полуинтервал на две половинки 
и рекурсивно вызывает сортировку отдельно для каждой.

Затем два отсортированных массива сливаются в один с помощью merge.
*/
function merge_sort(arr, left, right, i = 1) {
  if (right - left >= 2) {
    console.log(`mergeSort ${arr} ${left} ${right} ${i}`);
    console.log(``);
    let mid = Math.floor((left + right) / 2);
    merge_sort(arr, left, mid, ++i);
    merge_sort(arr, mid, right, ++i);
    arr.splice(left, right, merge(arr, left, mid, right));
    console.log(`resultMerge - ${arr}`);
    console.log(`---------------`);
    console.log(``);
    // return result;
  }

  // if (arr.length <= 1) {
  //   return arr;
  // }

  // const middle = Math.floor(arr.length / 2);

  // const left = arr.slice(0, middle);
  // const right = arr.slice(middle);

  // return merge(merge_sort(left), merge_sort(right));
}

function test() {
  // const a = [1, 4, 9, 2, 10, 11];
  // const b = merge(a, 0, 3, 6);

  // console.log(`b - ${b}`);

  // // var expected = [1, 2, 4, 9, 10, 11];

  // const c = [1, 4, 2, 10, 1, 2];
  const c = [4, 1, 3, 2];
  merge_sort(c, 0, 4);
  // expected = [1, 1, 2, 2, 4, 10];
}

test();

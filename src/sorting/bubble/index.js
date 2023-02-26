function bubbleSorting(arr) {
  let flag = true;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const left = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = left;
        flag = true;
      }
    }

    if (flag) {
      console.log(...arr);
      flag = false;
    }
  }
}

function solution() {
  const n = 5;
  const arr = [4, 3, 9, 2, 1];
  // const arr = [1, 1, 1, 1, 1];
  // const arr = [4, 5];

  bubbleSorting(arr);
}

solution();

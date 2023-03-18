function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function isLessPivot(items, pivot) {
  console.log(`________________`);
  console.log(`isLessPivot`);
  console.log(items);
  console.log(pivot);
  console.log(`items.solved < pivot.solved`);
  console.log(items.solved < pivot.solved);
  console.log(`________________`);
  return (
    items.solved < pivot.solved ||
    (items.solved === pivot.solved && items.penalty < pivot.penalty) ||
    (items.solved === pivot.solved &&
      items.penalty === pivot.penalty &&
      items.username < pivot.username)
  );
}

function isGreaterPivot(items, pivot) {
  console.log(`________________`);
  console.log(`isGreaterPivot`);
  console.log(`items.solved`);
  console.log(items.solved);
  console.log(`pivot.solved`);
  console.log(pivot.solved);
  console.log(`items.solved > pivot.solved`);
  console.log(items.solved > pivot.solved);
  console.log(`________________`);
  return (
    items.solved > pivot.solved ||
    (items.solved === pivot.solved && items.penalty > pivot.penalty) ||
    (items.solved === pivot.solved &&
      items.penalty === pivot.penalty &&
      items.username > pivot.username)
  );
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer

  while (i <= j) {
    console.log(`items`);
    console.log(items);

    console.log(`i - ${i}`);
    console.log(`j - ${j}`);
    console.log(``);

    console.log(`items[i]`);
    console.log(items[i]);
    console.log(`pivot`);
    console.log(pivot);

    // while (items[i] < pivot) {
    while (isLessPivot(items[i], pivot)) {
      i++;
      console.log(`i - ${i}`);
    }
    console.log(`i - ${i}`);

    console.log(``);
    console.log(`items[j]`);
    console.log(items[j]);
    console.log(`pivot`);
    console.log(pivot);

    // while (items[j] > pivot) {
    while (isGreaterPivot(items[j], pivot)) {
      j--;
      console.log(`j - ${j}`);
    }
    console.log(`j - ${j}`);

    if (i <= j) {
      console.log(``);

      console.log(`items[i]`);
      console.log(items[i]);
      console.log(`items[j]`);
      console.log(items[j]);

      swap(items, i, j); //sawpping two elements
      i++;
      j--;

      console.log(`items after swap`);
      console.log(items);
    }
    console.log(`----------`);
  }

  console.log(`i - ${i}`);
  console.log(`===========`);
  return i;
}

function quickSort(items, left, right) {
  var index;

  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition

    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }

  return items;
}

// var items = [-5, -3, -7, -6, -2, -9];
var items = [
  { solved: -4, penalty: 100, username: "alla" },
  { solved: -6, penalty: 1000, username: "gena" },
  { solved: -2, penalty: 90, username: "gosha" },
  { solved: -2, penalty: 90, username: "rita" },
  { solved: -4, penalty: 80, username: "timofey" },
];

// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]

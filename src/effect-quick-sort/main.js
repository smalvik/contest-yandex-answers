function partition(items, left, right) {
  let pivot = items[left];
  let i = left + 1;
  let j = right - 1;

  while (true) {
    if (i <= j && items[j] > pivot) {
      j--;
    } else if (i <= j && items[i] < pivot) {
      i++;
    }

    if (i <= j) {
      let temp = items[i];
      items[i] = items[j];
      items[j] = temp;
    } else {
      let temp = items[left];
      items[left] = items[j];
      items[j] = temp;

      return j;
    }
  }
}

function quickSort(items, left, right) {
  if (right - left > 1) {
    let p = partition(items, left, right);
    quickSort(items, left, p);
    quickSort(items, p + 1, right);
  }
}

let items = [
  [-4, 100, "alla"],
  [-6, 1000, "gena"],
  [-2, 90, "gosha"],
  [-2, 90, "rita"],
  [-4, 80, "timofey"],
];

quickSort(items, 0, items.length);

console.log(items);

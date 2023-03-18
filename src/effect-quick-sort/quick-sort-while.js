function quickSort(arr) {
  function recursiveQuickSort(leftIndex, rightIndex) {
    // Run until we have less than 2 elements to sort
    if (leftIndex >= rightIndex) return;

    // Correctly place a single value and obtain its index
    const sortedPoint = sortAndReturnSortedIndex(leftIndex, rightIndex);

    // Sort each side of the correctly sorted index
    recursiveQuickSort(leftIndex, sortedPoint - 1);
    recursiveQuickSort(sortedPoint + 1, rightIndex);
  }

  function sortAndReturnSortedIndex(leftIndex, rightIndex) {
    // Use the right-most value as the pivot
    const pivotIndex = rightIndex;

    // Decreate the right-index so as to skip the pivot
    rightIndex--;

    // Run until the contracted window has fully contracted
    while (leftIndex < rightIndex) {
      // Move the left-index right until it finds a value higher than the pivot
      while (arr[leftIndex] < arr[pivotIndex]) leftIndex++;

      // Move the right-index left until it finds a value lower than the pivot
      while (arr[rightIndex] > arr[pivotIndex]) rightIndex--;

      // Swap the left and right values, so long as the window hasn't fully contracted
      if (leftIndex < rightIndex) {
        [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
      }
    }

    // The left-index stopped when it reached the first value greater than the pivot
    // So swap the pivot for the left-index, and the pivot is now correctly placed
    [arr[leftIndex], arr[pivotIndex]] = [arr[pivotIndex], arr[leftIndex]];
    return leftIndex;
  }

  // Start the sorting process
  recursiveQuickSort(0, arr.length - 1);
}

let nums = [3, 2, 8, 5, 6, 1];
quickSort(nums);

console.log(nums);

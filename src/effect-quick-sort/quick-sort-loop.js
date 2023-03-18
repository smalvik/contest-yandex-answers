function quickSort(nums) {
  function recursiveQuickSort(nums, leftIndex, rightIndex) {
    // Run until we have less than 2 elements to sort
    if (leftIndex >= rightIndex) {
      return;
    }

    // Correctly place a number within the current range
    const partitionIndex = partititon(nums, leftIndex, rightIndex);

    // Call the function again on either side of the correctly sorted number
    recursiveQuickSort(nums, leftIndex, partitionIndex - 1);
    recursiveQuickSort(nums, partitionIndex + 1, rightIndex);
  }

  function partititon(nums, leftIndex, rightIndex) {
    // Choose a pivot point (right-most value)
    const pivotIndex = rightIndex;

    // Create a marker to show where the first greater-than-pivot number is stored
    let firstGreaterThanPivotIndex = leftIndex;

    for (let i = leftIndex; i < rightIndex; i++) {
      // If the current number is less than the pivot
      if (nums[i] <= nums[pivotIndex]) {
        // Swap the current number with the first greater than pivot number
        [nums[i], nums[firstGreaterThanPivotIndex]] = [
          nums[firstGreaterThanPivotIndex],
          nums[i],
        ];

        // Increment the first greater than pivot counter, as the number in that position is now lower than the pivot
        firstGreaterThanPivotIndex++;
      }
    }

    // Place the pivot in the middle of the sorted values, swapping it for the first higher-than-pivot value
    [nums[firstGreaterThanPivotIndex], nums[pivotIndex]] = [
      nums[pivotIndex],
      nums[firstGreaterThanPivotIndex],
    ];
    return firstGreaterThanPivotIndex;
  }

  recursiveQuickSort(nums, 0, nums.length - 1);
}

let nums = [3, 2, 8, 5, 6, 1];
quickSort(nums, 0, nums.length - 1);

console.log(nums);

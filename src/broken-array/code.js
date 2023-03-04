function brokenSearch(nums, target) {
  let startIdx = 0;
  let endIdx = nums.length - 1;

  while (startIdx <= endIdx) {
    let midIdx = Math.ceil((startIdx + endIdx) / 2);

    if (nums[midIdx] === target) {
      return +midIdx;
    } else if (nums[startIdx] <= nums[midIdx]) {
      if (nums[startIdx] <= target && target < nums[midIdx]) {
        endIdx = midIdx - 1;
      } else {
        startIdx = midIdx + 1;
      }
    } else {
      if (nums[midIdx] < target && target <= nums[endIdx]) {
        startIdx = midIdx + 1;
      } else {
        endIdx = midIdx - 1;
      }
    }
  }

  return -1;
}

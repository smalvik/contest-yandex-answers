function searchRange(nums, target) {
  const targetRange = [-1, -1];

  const leftIdx = extremeInsertionIndex(nums, target, true);

  if (leftIdx === nums.length || nums[leftIdx] != target) return targetRange;

  targetRange[0] = leftIdx;
  targetRange[1] = extremeInsertionIndex(nums, target, false) - 1;

  return targetRange;

  function extremeInsertionIndex(nums, target, left) {
    let lo = 0,
      hi = nums.length;

    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2);

      if (nums[mid] > target || (left && target === nums[mid])) hi = mid;
      else lo = mid + 1;
    }

    return lo;
  }
}

const nums = [1, 1, 4, 4, 4, 4, 8];
const target = 4;

console.log(searchRange(nums, target));

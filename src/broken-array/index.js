function findIdxToBrokenArray(nums, target) {
  let startIdx = 0;
  let endIdx = nums.length - 1;

  while (startIdx <= endIdx) {
    console.log(`startIdx - ${startIdx}`);
    console.log(`endIdx - ${endIdx}`);

    let midIdx = Math.floor((startIdx + endIdx) / 2);
    console.log(`midIdx - ${midIdx}`);

    console.log(`nums[midIdx] - ${nums[midIdx]}`);

    console.log(`nums[startIdx] - ${nums[startIdx]}`);

    console.log(`nums[endIdx] - ${nums[endIdx]}`);

    console.log(`=================`);

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

// В первой строке записано число n — длина массива.
// Во второй строке записано положительное число k — искомый элемент.
// Далее в строку через пробел записано n натуральных чисел – элементы массива.
function solve() {
  const n = 11;
  const target = 1;
  const nums = "1 2 3 4 5 6 7 8 9 10 0".split(" ").map((num) => Number(num));

  console.log(findIdxToBrokenArray(nums, target));
}

solve();
